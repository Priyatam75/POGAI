from flask import Flask, request, jsonify
import pickle
import pandas as pd
from collections import Counter
from sklearn.preprocessing import LabelEncoder
import numpy as np 

from model import db, User, Contact, FAQ, Feature, Prompt, PromptResult, UserProfile
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import inspect
from flask_cors import CORS
import click
from flask.cli import with_appcontext
from datetime import datetime
from flask_jwt_extended import jwt_required, get_jwt_identity, JWTManager, create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
import secrets
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

with open('svm_model.pkl', 'rb') as model_file:
    svm_model = pickle.load(model_file)
with open('nb_model.pkl', 'rb') as model_file:
    nb_model = pickle.load(model_file)
with open('rf_model.pkl', 'rb') as model_file:
    rf_model = pickle.load(model_file)

@app.route('/api/text', methods=['OPTIONS', 'POST'])
def receive_text():
    if request.method == 'OPTIONS':
        response = jsonify({"message": "Preflight request handled successfully."})
    else:
        data = request.get_json()
        text_data = data.get('text', '')
        disease=predict_disease(text_data)
        response = jsonify({"message": disease})
        print("text_data")
       

    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    
    return response
def predict_disease(text_data):
    DATA_PATH = "Training.csv"
    data = pd.read_csv(DATA_PATH).dropna(axis = 1)
    encoder = LabelEncoder()
    data["prognosis"] = encoder.fit_transform(data["prognosis"])
    X = data.iloc[:,:-1]
    symptoms = X.columns.values
    symptom_index = {}
    for index, value in enumerate(symptoms):
        symptom = " ".join([i.capitalize() for i in value.split("_")])
        symptom_index[symptom] = index
    data_dict = {"symptom_index": symptom_index,"predictions_classes": encoder.classes_}
    symptoms = text_data.split(",")

    # Create input data for the models
    input_data = [0] * len(data_dict["symptom_index"])
    for symptom in symptoms:
        # Check if the symptom is in the dictionary
        if symptom in data_dict["symptom_index"]:
            index = data_dict["symptom_index"][symptom]
            input_data[index] = 1
        else:
            print(f"Warning: Symptom '{symptom}' not found in the symptom index.")

    # Reshape the input data for model predictions
    input_data = np.array(input_data).reshape(1, -1)

    # Generate individual outputs
    rf_prediction = data_dict["predictions_classes"][rf_model.predict(input_data)[0]]
    nb_prediction = data_dict["predictions_classes"][nb_model.predict(input_data)[0]]
    svm_prediction = data_dict["predictions_classes"][svm_model.predict(input_data)[0]]

    # Create a list of predictions
    predictions_list = [rf_prediction, nb_prediction, svm_prediction]

    # Find the mode using Counter
    mode_prediction = Counter(predictions_list).most_common(1)[0][0]

    # Return a dictionary containing all predictions
    predictions = {
        "rf_model_prediction": rf_prediction,
        "naive_bayes_prediction": nb_prediction,
        "svm_model_prediction": svm_prediction,
        "final_prediction": mode_prediction
    }
    return predictions['final_prediction']

 
 # DATABASE CODE
 
# Configure the SQLAlchemy part of the app instance
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:{ENV}@localhost/{ENV}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', secrets.token_hex(16))
app.config['JWT_TOKEN_LOCATION'] = ['headers']
app.config['JWT_HEADER_NAME'] = 'Authorization'
app.config['JWT_HEADER_TYPE'] = 'Bearer'
jwt = JWTManager(app)



# Initialize the SQLAlchemy instance with the app
db.init_app(app)

# Initialize the database
@click.command(name='create_tables')
@with_appcontext
def create_tables():
    inspector = inspect(db.engine)
    tables = inspector.get_table_names()
    
    # Check if tables are already present
    if not tables:
        db.create_all()
        print("Tables created")
    else:
        print("Tables already exist")

app.cli.add_command(create_tables)


# Define a route to add a new user
@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')
    
    if not username or not password or not email:
        return jsonify({'error': 'Missing required parameters'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'User already exists'}), 409

    hashed_password = generate_password_hash(password)
    new_user = User(username=username, password=hashed_password, email=email, created_at=datetime.utcnow())
    db.session.add(new_user)
    db.session.commit()

    user = User.query.filter_by(email=email).first()
    user_data = {'id': user.id, 'email': user.email}
    token = create_access_token(identity=user.id, additional_claims=user_data)

    return jsonify({'message': f'Added user {username} with email {email}', 'token': token}), 201


# Define a route to get all users
@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify({'users': [{'username': user.username, 'email': user.email} for user in users]})

@app.route('/get_user', methods=['POST'])
def get_user():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if not email or not password:
        return jsonify({'error': 'Missing required parameters'}), 400

    user = User.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password, password):
        return jsonify({'error': 'Invalid email or password'}), 401

    user_data = {'id': user.id, 'email': user.email}
    token = create_access_token(identity=user.id, additional_claims=user_data)

    return jsonify({'message': 'User found', 'user': {'username': user.username, 'email': user.email}, 'token': token}), 200

# generate a reset link and send to the users email
@app.route('/forgot_password', methods=['POST'])
def forgot_password():
    data = request.get_json()
    email = data.get('email')

    if not email:
        return jsonify({'error': 'Missing required parameter: email'}), 400

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    # implement smtp 
    reset_link = ''

    return jsonify({'message': 'Password reset link has been sent to your email', 'reset_link': reset_link}), 200

# resets the users password
@app.route('/reset_password', methods=['POST'])
def reset_password():
    data = request.get_json()
    # token sent by forget password
    token = data.get('token')
    # new pass
    new_password = data.get('new_password')

    if not token or not new_password:
        return jsonify({'error': 'Missing required parameters'}), 400
    
    # need to add extra functionality to verify token and expiration date

    # email will be sent as a payload by the link

    email = ""
    # find the user email
    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({'error': 'User not found'}), 404

    # Update the user's password
    user.password = generate_password_hash(new_password)
    db.session.commit()

    return jsonify({'message': 'Password has been reset successfully'}), 200

@app.route('/add_prompt', methods=['POST'])
@jwt_required()  # Requires a valid JWT token
def add_prompt():
    current_user_id = get_jwt_identity()  # Get the current user's ID from the JWT token

    data = request.get_json()
    query = data.get('query')

    if not query:
        return jsonify({'error': 'Missing required parameter: query'}), 400

    # Check if the user exists
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    # Create a new prompt
    new_prompt = Prompt(user_id=current_user_id, query=query, created_at=datetime.utcnow())
    db.session.add(new_prompt)
    db.session.commit()

    return jsonify({'message': 'Prompt added successfully', 'prompt_id': new_prompt.id}), 201

@app.route('/get_prompt', methods=['POST'])
@jwt_required()
def get_prompt():
    current_user_id = get_jwt_identity()  # Get the current user's ID from the JWT token

    data = request.get_json()
    prompt_id = data.get('prompt_id')

    if not prompt_id:
        return jsonify({'error': 'Missing required parameter: prompt_id'}), 400

    # Fetch the prompt based on prompt_id and current_user_id
    prompt = Prompt.query.filter_by(id=prompt_id, user_id=current_user_id).first()

    if not prompt:
        return jsonify({'error': 'Prompt not found'}), 404

    return jsonify({
        'id': prompt.id,
        'user_id': prompt.user_id,
        'query': prompt.query,
        'created_at': prompt.created_at,
        'results': [{'id': result.id, 'result': result.result} for result in prompt.results]
    }), 200


@app.route('/get_prompt_results', methods=['POST'])
@jwt_required()
def get_prompt_results():
    data = request.get_json()
    prompt_id = data.get('prompt_id')

    if not prompt_id:
        return jsonify({'error': 'Missing required parameter: prompt_id'}), 400

    results = PromptResult.query.filter_by(prompt_id=prompt_id).all()

    if not results:
        return jsonify({'error': 'No results found for the given prompt ID'}), 404

    return jsonify({
        'prompt_id': prompt_id,
        'results': [{'id': result.id, 'result': result.result, 'created_at': result.created_at} for result in results]
    }), 200

@app.route('/add_patient', methods=['POST'])
@jwt_required()
def add_patient():
    current_user_id = get_jwt_identity()  # Get the current user's ID from the JWT token

    data = request.get_json()
    full_name = data.get('full_name')
    date_of_birth = data.get('date_of_birth')
    address = data.get('address')

    if not full_name or not date_of_birth or not address:
        return jsonify({'error': 'Missing required parameters'}), 400

    # Check if the user exists
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    # Create a new UserProfile
    new_user_profile = UserProfile(
        user_id=current_user_id,
        full_name=full_name,
        date_of_birth=date_of_birth,
        address=address,
        created_at=datetime.utcnow()
    )
    db.session.add(new_user_profile)
    db.session.commit()

    return jsonify({'message': 'Patient added successfully', 'profile_id': new_user_profile.id}), 201

@app.route('/get_patient', methods=['GET'])
@jwt_required()
def get_patient():
    current_user_id = get_jwt_identity()  # Get the current user's ID from the JWT token

    # Retrieve the UserProfile associated with the current user ID
    user_profile = UserProfile.query.filter_by(user_id=current_user_id).first()

    if not user_profile:
        return jsonify({'error': 'Patient profile not found'}), 404

    return jsonify({
        'id': user_profile.id,
        'user_id': user_profile.user_id,
        'full_name': user_profile.full_name,
        'date_of_birth': user_profile.date_of_birth,
        'address': user_profile.address,
        'created_at': user_profile.created_at
    }), 200


# ---------------

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd
from collections import Counter
from sklearn.preprocessing import LabelEncoder
import numpy as np 
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

 


if __name__ == '__main__':
    app.run(debug=True)

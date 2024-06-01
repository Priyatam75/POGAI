import styles, { layout } from "../style";
import RobotNurseImage from "../assets/robotnurse.png";

const ChooseCard = () => (
  <section className={`${layout.section} bg-[#FDFEFF] p-1 rounded-2xl shadow-2xl mt-12 mb-12`}>
    <div className="flex flex-col h-[400px] w-full justify-center items-center text-center">

      <div className="flex-none text-xl text-[#092689] w-full flex justify-center items-center pt-6 pb-3 ">
        <b>Why Choose Us?</b>
      </div>

      <div className="flex-1 w-full flex flex-row justify-center items-center space-x-2 pr-5 pl-5 ">

        <div className="flex-1 h-full flex justify-center items-center">
          <img src={RobotNurseImage} alt="RobotNurse Image" className=" h-[300px] mb-8 rounded-2xl shadow-2xl"  />
        </div>

        <div className="flex-1 w-full h-full grid grid-rows-3 ">
          <div id="text1landing" className="flex  w-full h-full text-left">
            <p><b>Accurate and Reliable:</b> Our AI-powered system provides fast and accurate diagnosis assistance, helping users receive timely medical insights.</p>
          </div>

          <div id="text2landing" className="flex w-full h-full text-left">
          <p><b>Personalized Care:</b>  We offer personalized recommendations tailored to each user's symptoms and medical history, ensuring individualized care.</p>
          </div>

          <div id="text3landing" className="flex w-full h-full text-left">
          <p><b>Access to In-Network Doctors:</b>  Connect with trusted healthcare providers directly through our platform, streamlining the consultation process and enhancing patient-doctor communication.</p>
          </div>

          
        </div>

      </div>
    </div>
  </section>
);

export default ChooseCard;



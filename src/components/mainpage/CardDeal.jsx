import styles, { layout } from "../../style";
import SymptomImage from "../../assets/symptom.png";
import AnalyticImage from "../../assets/analytics.png";
import MedRecordsImage from "../../assets/medrecords.png";
import DoctorImage from "../../assets/doctor.png";

const CardDeal = () => (
  <section className={`${layout.section} bg-[#FDFEFF] p-1 pb-5 rounded-2xl shadow-2xl`}>
    <div className="flex flex-col h-[250px] w-full justify-center items-center text-center ">
      <div className="flex-none text-2xl text-[#092689] w-full flex justify-center items-center pt-6 pb-5">
        <b>How it Works</b>
      </div>

      <div className="flex-1  w-full flex flex-row justify-center items-center space-x-2 pr-5 pl-5 ">
        
        <div className="flex-1  h-full flex justify-center items-center">
        <img src={SymptomImage} alt="Symptom Image" className="w-24 h-24 rounded-2xl shadow-2xl"  />
        </div>
        <div className="flex-1  h-full flex justify-center items-center">
        <img src={AnalyticImage} alt="Symptom Image" className="w-24 h-24 rounded-2xl shadow-2xl" />
        </div>
        <div className="flex-1 h-full flex justify-center items-center">
        <img src={ MedRecordsImage} alt="Symptom Image" className="w-24 h-24 rounded-2xl shadow-2xl" />
        </div>
        <div className="flex-1 h-full flex justify-center items-center">
        <img src={DoctorImage} alt="Symptom Image" className="w-24 h-24 rounded-2xl shadow-2xl" />
        </div>
      </div>

      <div className="flex-1  w-full flex flex-row justify-center items-center space-x-2 pr-5 pl-5 ">
        <div className="flex-1  h-full flex justify-center items-center">
        <b>Symptom Input</b>
        </div>
        <div className="flex-1  h-full flex justify-center items-center">
        <b>AI Analysis</b>
        </div>
        <div className="flex-1  h-full flex justify-center items-center">
        <b>Accessing Medical Records</b>
        </div>
        <div className="flex-1  h-full flex justify-center items-center">
        <b>Connecting with Doctors</b>
        </div>
      </div>

    </div>
  </section>
);

export default CardDeal;



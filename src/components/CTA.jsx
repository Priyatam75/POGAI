import styles, { layout } from "../style";
import DoctorBadge from "../assets/doctorbadge.png";
import DoctorNote from "../assets/doctornote.png";
import ButtonCTA from "./ButtonCTA";

const CTA = () => (
  <section id="features" className={`${layout.section} justify-center items-start mt-10 mb-12 `}>

    <div className="flex flex-col h-[900px] sm:flex-row sm:h-[450px] lg:h-[500px] w-full text-center p-2 ">

      <div className="flex-1 bg-[#F6DFE4] rounded-lg shadow-lg sm:mr-5 mb-5 sm:mb-0 grid grid-rows-3 pt-5">

        <div className="flex items-center justify-center">
          <img src={DoctorBadge} alt="Doctor Badge" className="h-[138px] sm:h-full sm:w-full sm:object-contain" />
        </div>

        <div className="flex items-center justify-center max-w-lg mx-auto px-12 sm:text-sm text-md md:text-lg pt-5 "> 
        <p>
          Join the future of healthcare! Experience the power of AI in diagnosis assistance and patient care. Streamline your practice with instant access to <b>patient records</b> and <b>personalized insights</b>.</p>

        </div>

        <div className="flex items-center justify-center "> 
          <ButtonCTA ButtonName="TRY NOW" ButtonBgColor="#FF0031" ButtonFunc={() => { console.log("Button clicked!"); }} />
        </div>
      </div>

    <div className="flex-1 bg-[#D4F0FF] rounded-lg shadow-lg grid grid-rows-3 pt-5">

   
        <div className="flex items-center justify-center">
          <img src={DoctorNote} alt="Doctor Note" className="h-[138px] sm:h-full sm:w-full sm:object-contain" />
        </div>

        <div className="flex items-center justify-center max-w-lg mx-auto px-12  sm:text-sm text-md md:text-lg pt-5 "> 
        <p> 
          Take control of your health journey! Enter your symptoms and receive instant, AI-powered diagnosis assistance. Access detailed <b>medical records</b> and <b>personalized recommendations</b>.</p>

        </div>


        <div className="flex items-center justify-center"> 
          <ButtonCTA ButtonName="GET DIAGNOSIS" ButtonBgColor="#092689" ButtonFunc={() => { console.log("Button clicked!"); }} />
        </div>

      </div> 
      
    </div>



  </section>
);

export default CTA;


      {/* <div className="flex flex-row h-[380px] lg:h-[500px] w-full text-center p-2 ">

        <div className="flex-1 bg-[#F6DFE4] rounded-lg shadow-lg mr-5 grid grid-rows-3 pt-5">


          <div className="flex items-center justify-center">
            <img src={DoctorBadge} alt="Doctor Badge" className="h-full w-full object-contain" />
          </div>

          <div className="flex items-center justify-center max-w-lg mx-auto px-12 sm:text-sm text-md md:text-lg pt-5 "> 
          <p>
            Join the future of healthcare! Experience the power of AI in diagnosis assistance and patient care. Streamline your practice with instant access to <b>patient records</b> and <b>personalized insights</b>.</p>

          </div>

          <div className="flex items-center justify-center "> 
            <ButtonCTA ButtonName="TRY NOW" ButtonBgColor="#FF0031" ButtonFunc={() => { console.log("Button clicked!"); }} />
          </div>
        </div> */}

      {/* <div className="flex-1 bg-[#D4F0FF] rounded-lg shadow-lg grid grid-rows-3 pt-5">

   
        <div className="flex items-center justify-center">
          <img src={DoctorNote} alt="Doctor Note" className="h-full w-full object-contain" />
        </div>

        <div className="flex items-center justify-center max-w-lg mx-auto px-12  sm:text-sm text-md md:text-lg pt-5 "> 
        <p> 
          Take control of your health journey! Enter your symptoms and receive instant, AI-powered diagnosis assistance. Access detailed <b>medical records</b> and <b>personalized recommendations</b>.</p>

        </div>


        <div className="flex items-center justify-center"> 
          <ButtonCTA ButtonName="GET DIAGNOSIS" ButtonBgColor="#092689" ButtonFunc={() => { console.log("Button clicked!"); }} />
        </div>

      </div> */}
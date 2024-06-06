import styles, { layout } from "../../style";
import magnifyingGlassImage from "../../assets/magnifyingglass.png";
import recordsImage from "../../assets/records.png";
import connectImage from "../../assets/connect.png";


const Business = () => (
  <section id="features" className={`${layout.section} justify-center items-start mt-10 bg-[#FDFEFF]`}>
    <div className="flex flex-col sm:flex-row h-auto w-full text-center">

      <div id="FirstCard" className="flex-1 mb-4 sm:mb-0 sm:mr-1 grid grid-cols-3 ">

        <div className="flex items-center justify-center "></div>
        <div className="flex items-center justify-center "> 
          <img src={magnifyingGlassImage} alt="Magnifying Glass" style={{ width: '100%', height: '100%' }} /> 
        </div>
        <div className="flex items-center justify-center "></div>

        <div className="flex items-center justify-center col-span-3 text-[#FF0000] font-bold text-2xl mt-6">Insights</div>
        <div className="flex items-center justify-center col-span-3 text-xl mt-5 " style={{ alignItems: 'flex-start' }}>
          Get AI-powered personalized diagnosis insights and recommendations
        </div>
      </div>

      <div id="SecondCard" className="flex-1 mb-4 sm:mb-0 sm:mr-1 grid grid-cols-3">

        <div className="flex items-center justify-center "></div>
        <div className="flex items-center justify-center">
          <img src={recordsImage} alt="Records" style={{ width: '100%', height: '80%' }} />
        </div>
        <div className="flex items-center justify-center "></div>

        <div className="flex items-center justify-center col-span-3 text-[#FF0000] font-bold text-2xl">Medical Record</div>
        <div className="flex items-center justify-center col-span-3 text-xl mt-5" style={{ alignItems: 'flex-start' }}>
          Receive detailed medical records <br /> instantly
        </div>
      </div>

      <div id="ThirdCard" className="flex-1 grid grid-cols-3">

        <div className="flex items-center justify-center "></div>
        <div className="flex items-center justify-center "> 
          <img src={connectImage} alt="Connect" style={{ width: '100%', height: '80%' }} /> 
        </div>
        <div className="flex items-center justify-center "></div>

        <div className="flex items-center justify-center col-span-3 text-[#FF0000] font-bold text-2xl ">Connect</div>
        <div className="flex items-center justify-center col-span-3 text-xl mt-5" style={{ alignItems: 'flex-start' }}>
          Input insurance details for instant access to in-network doctors.
        </div>
      </div>
    </div>
  </section>
);

export default Business;

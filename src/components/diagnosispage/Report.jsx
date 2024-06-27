import React from 'react';
import styles from "../../style";
import CheckMarkimage from '../../assets/checkmark.png';
import Locationimage from '../../assets/location.png';
import Scheduleimage from '../../assets/schedule.png';
import Calendarimage from '../../assets/calendar.png';
import ButtonCTA from "../tools/ButtonCTA";

const Report = () => {
  return (
    <>
      <section id="report" className={`flex flex-col mb-4`}>
        <div className="h-[1570px] px-4 sm:px-20 flex flex-col">
          <div className="h-[40px] pt-2 pl-8 text-[#092689]">
            <p>DIAGNOSIS REPORT</p>
          </div>

          <div className="flex-1 rounded-3xl shadow-lg border-[2px] border-[#1F7CCB] space-y-6 p-4 px-6">

            <div id="Box1" className="h-[180px]  pl-5">
            <div id="InnerBox1" className=" h-[50px] m-2 pt-5">
                <p className='text-xl text-[#588D14]'><b>LOW URGENCY</b></p>
              </div>
              <div id="InnerBox2" className="h-[15px] ml-2 ">
               <p className=" text-[#645D5D] text-xl"><b>Relevant findings</b></p>
              </div>
              <div id="InnerBox3" className="h-[85px] m-2 flex flex-col">

              <div id="InnerBox3a" className="flex-1 flex items-center">
              <img src={CheckMarkimage} alt="Checkmark" className='mr-2'/>
              <p>Hours since the onset of symptoms: 1</p>
                </div>
                <div id="InnerBox3b" className="flex-1 flex items-center">
                <img src={CheckMarkimage} alt="Checkmark" className='mr-2'/>
                <p>Mild Pain on the above eyebrows</p>
                </div>
              </div>
            </div>

            <div id="Box2" className="h-[225px] bg-white border-black border-[2px] rounded-2xl p-1">
            <div id="InnerBox1" className="h-[50px] mt-2">
              <p className="ml-6 text-[#645D5D] text-xl"><b>Possible Diseases</b> </p>
            </div>
            <div id="InnerBox2" className="h-[50px] border-b-2 border-[#D9D9D9]">
              <p className="ml-6 text-xl ">Migraine - Migraine Headache</p>
            </div>
            <div id="InnerBox3" className="h-[50px] border-b-2 border-[#D9D9D9]">
              <p className="ml-6 text-xl pt-3">Common Headache</p>
            </div>
            <div id="InnerBox4" className="h-[50px] ">
              <p className="ml-6 text-xl pt-3">Tension Headache</p>
            </div>
          </div>

            <div id="Box3" className=" h-[360px] bg-white border-black border-[2px] rounded-2xl p-1">
              <div id="InnerBox1" className="h-[80px] pt-8">
                <p className="ml-6 text-[#645D5D] text-xl"><b>Recommendations</b> </p>
              </div>
              <div id="InnerBox2" className="h-[85px]">
                <p className="ml-6 text-xl text-[#645D5D]">Medication</p>
                <p className="ml-6 text-xl mt-2">Over The Counter - Migraine Tablet</p>
              </div>
              <div id="InnerBox3" className="h-[100px] border-b-2 border-[#D9D9D9]">
              <p className="ml-6 text-xl text-[#645D5D]">Dosage</p>
              <p className="ml-6 text-xl mt-2">Take a tablet with a meal. Make sure the minimum gap between two intakes is 6 hours. </p>
              </div>
              <div id="InnerBox4" className="h-[70px] ">
                <p className="ml-6 text-xl pt-3">If your condition worsens, check your case with a health professional and go to a hospital.</p>
              </div>
            </div>

            <div id="Box4" className="h-[200px] bg-white rounded-2xl border-black border-[2px]">
              <div id="InnerBox1" className="h-[50px] mt-2">
                <p className="ml-6 pt-4 text-[#092689] text-xl"><b>Specialities</b> </p>
              </div>
              <div id="InnerBox2" className="h-[75px] border-b-2 border-[#D9D9D9]">
                <p className="ml-6 text-xl pt-4">Family Medicine</p>
              </div>
              <div id="InnerBox3" className="h-[60px] ">
                <p className="ml-6 text-xl pt-3">Neurology</p>
              </div>
            </div>

            <div id="Box5" className="h-[100px] bg-white rounded-2xl border-black border-[2px]">
            <div id="InnerBox1" className="h-[40px]">
                <p className="ml-6 pt-2 text-[#645D5D] text-xl"><b>Contextual Information</b> </p>
              </div>
              <div id="InnerBox2" className="h-[40px] flex items-center">

                <img src={Locationimage} alt="Location" className='pt-3 ml-6'/>

                <p className="ml-2 text-xl pt-3">Napverville, IL</p>

                <img src={Calendarimage} alt="Calendar" className='pt-3 ml-6'/>

                <p className="ml-2 text-xl pt-3">04/13/2024</p>

                <img src={Scheduleimage} alt="Schedule" className='pt-3 ml-6'/>

                <p className="ml-2 text-xl pt-3">00:16</p>
              </div>
            </div>

            <div id="Box6" className="h-[270px]">

              <div className="h-[80px] pt-8">
                <p className="ml-6 text-[#FF0031] text-xl"><b>Ready to take control of your health journey?"</b> </p>
              </div>

              <div className="h-[85px]">
                <p className="ml-6 text-xl "><b>Created a profile to save your medical history, track your progress, and receive personalized recommendations. Or, connect with in-network doctors for expert advice and guidance.</b></p>
              </div>

              <div className="h-[85px] pt-5 flex items-center justify-end">

                <ButtonCTA ButtonName="FIND DOCTORS" ButtonBgColor="#FDFEFF" ButtonFunc={() => {console.log("clicked")}} ButtonTextColor='#092689'/>
                  
                <div className="ml-5"></div>

                <ButtonCTA ButtonName="CREATE PROFILE" ButtonBgColor="#092689" ButtonFunc={() => {console.log("clicked")}} 
                ButtonTextColor="#FDFEFF" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Report;


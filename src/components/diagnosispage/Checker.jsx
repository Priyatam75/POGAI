import React, { useState } from 'react';
import styles from "../../style";
import diagnosisImage from "../../assets/diagnosis.png";
import SymptomCheckerImage from "../../assets/symptomchecker.png";
import ButtonCTA from "../tools/ButtonCTA";



const Checker = () => {
  const [symptoms, setSymptoms] = useState('');

  const handleInputChange = (event) => {
    setSymptoms(event.target.value);
  };

   const handleButtonClick = async () => {
    console.log("Button clicked! Symptoms:", symptoms);
    try {
      const response = await fetch('http://localhost:5000/add_prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}` // Assuming the JWT token is stored in localStorage
        },
        body: JSON.stringify({ query: symptoms })
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Prompt added successfully", data);
      } else {
        const errorData = await response.json();
        console.error("Error adding prompt:", errorData);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };


  return (
    <>
      <section id="checker" className={`flex flex-col`}>
        <div id="ImageDiagnosis">
          <img src={diagnosisImage} alt="Diagnosis" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="flex flex-col h-[800px] w-full px-4 sm:px-20 pt-10">
          <div className="flex-[1]">
            <div className="flex flex-col w-full h-full py-12 relative">
              {/* Absolute positioned image */}
              <img
                src={SymptomCheckerImage}
                alt="Symptom Checker"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 mt-3 "
                style={{ height: '150px' }} // Adjust height as needed
              />
              <div className="flex-[1] bg- pl-28 text-[#092689]">
                SYMPTOMS CHECKER
              </div>
              <div className="flex-[7] pl-20">
                <div className="flex flex-col w-full h-full border-[2px] border-[#1F7CCB] rounded-3xl shadow-2xl">
                  <div className="flex-[1] pl-16 pt-2 text-2xl">
                    <b> Not feeling well today?</b>
                  </div>
                  <div className="flex-[2] pl-16 text-lg">
                    Let’s check your symptoms! Get the guidance you need in less than 3 minutes. Enter the symptoms in the text box below.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-[2] ">
            <div className="flex flex-col w-full h-full py-2 relative">
              <div className="flex-[7]  py-10">
              <textarea
                  placeholder="Type your symptoms..."
                  value={symptoms}
                  onChange={handleInputChange}
                  className="w-full h-full text-lg border-[2px] border-[#1F7CCB] rounded-2xl shadow-lg pl-1 pt-1 focus:outline-none resize-none"
                  rows="4"
                />
              </div>
              <div className="flex-[1] flex justify-end">
                <ButtonCTA ButtonName="DIAGNOSIS NOW" ButtonBgColor="#FF0031" ButtonFunc={handleButtonClick} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checker;

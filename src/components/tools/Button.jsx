import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../../style";

function Button(){
  let navigate =useNavigate()
  return( 
    <button type="button" 
    onClick={()=>{navigate("/inputpage")}}
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10`}>
      Get Started
    </button>
  );
}

export default Button;

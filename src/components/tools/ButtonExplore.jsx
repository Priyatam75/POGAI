import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../../style";

function ButtonExplore() {
  let navigate = useNavigate();
  return (
    <button 
      type="button" 
      onClick={() => { navigate("/inputpage") }}
      className={`py-4 px-10 font-poppins font-medium text-[18px] text-primary bg-[#FF0031] rounded-full outline-none mt-10 ml-10`}>
      EXPLORE NOW
    </button>
  );
}

export default ButtonExplore;

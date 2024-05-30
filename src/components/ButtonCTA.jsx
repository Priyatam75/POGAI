import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../style";

function ButtonCTA({ ButtonName, ButtonBgColor, ButtonFunc }) {
  let navigate = useNavigate();
  return (
    <button 
      type="button" 
      onClick={ButtonFunc ? ButtonFunc : () => { navigate("/inputpage") }} // Check if ButtonFunc is provided, else use default navigation
      className={`font-poppins font-medium text-[20px] shadow-lg text-primary bg-[${ButtonBgColor}] rounded-full outline-none py-4 px-10 `}>
      {ButtonName ? ButtonName : "N/A"} {/* Check if ButtonName is provided, else use default label */}
    </button>
  );
}

export default ButtonCTA;


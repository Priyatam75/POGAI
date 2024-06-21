import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../../style";

function ButtonCTA({ ButtonName, ButtonBgColor, ButtonTextColor, PaddingY, PaddingX, ButtonFunc }) {
  let navigate = useNavigate();
  return (
    <button 
      type="button" 
      onClick={ButtonFunc ? ButtonFunc : () => { navigate("/inputpage") }}
      className={`font-poppins font-medium text-[20px] shadow-lg border-[1px]
      text-[${ButtonTextColor || 'white'}] bg-[${ButtonBgColor}] rounded-full outline-none py-${PaddingY || '4'} px-${PaddingX || '10'}`}>
      {ButtonName || "N/A"}
    </button>
  );
}

export default ButtonCTA;


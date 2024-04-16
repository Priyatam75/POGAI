import { Route, BrowserRouter as Router } from 'react-router-dom';
import {useState} from 'react'
import styles from "../style";
function FinalPage(){
  const [val,setVal]=useState("hello there")
  const [answer,setAnswer]=useState('')
  const click=() =>{
    fetch('/api/text',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({text:val}),
      mode:'cors',
      credential: 'include'

    })
    .then(response=>response.json())
    .then(data =>{
      setAnswer(data.message)
      console.log(data);
    })
    .catch(error =>{
      console.error("Error:",error)
    });

    };
  const change = event =>{
    setVal(event.target.value)
  }
  return(
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <input onChange={change} 
      value={val}/>
      <button onClick={click}
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10`}> Predict </button>
      <h4 className={styles.heading2}>Result : {answer}</h4>
    </div>
  </section>
);

}

export default FinalPage;
import React from "react";
import { Formik, Field, Form } from 'formik';
import BackLogin from '../../../assets/img/backLogin.jpg'

const Singup = () => {

  function signIn(){

  }
  function closeModal(){

  }


  return (
    <div> 
      <dialog className="formDiv" open>
    <button className="closeBtn"><b>X</b></button>
    <form onSubmit={signIn}>
    <label htmlFor="">Nombre de usuario</label>
    <input type="text" />
    <label htmlFor="">Contraseña</label>
    <input type="text" />
    <button type="submit" className="loginBtn">Login</button>
  </form>
  </dialog>
  {/* <div>
    <img className="backgroundImage" src={BackLogin} alt="" />
  </div> */}
  </div>
     
    
    
  )
};

export default Singup;

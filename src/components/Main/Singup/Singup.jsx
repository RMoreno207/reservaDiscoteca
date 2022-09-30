import React,{useEffect, useState} from "react";
import { Formik, Field, Form } from 'formik';
import BackLogin from '../../../assets/img/backLogin.jpg';
import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const {register,formState:{errors},handleSubmit} = useForm();
  const [message,setMessage] = useState('');
  const [logged,setLogged] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (form)=>{
     
    setMessage('Inicio de sesión exitoso');
    alert('Bienvenido: ' + form.username); 
    
    setLogged(true);
  
  }

  useEffect(()=>{
    if(logged){
      navigate("/booking");
    }
  })

  


  return (
    <div> 
      <dialog className="formDiv" open>
    <button className="closeBtn"><b>X</b></button>
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="">Nombre de usuario</label>
    <input type="text" {...register('username',{required:true})}/>{errors.username?.type==='required' && <p className="errorMsg">El campo Nombre de usuario es requerido</p>}
    <label htmlFor="">Contraseña</label>
    <input type="text" {...register('password',{required:true})} />{errors.password?.type==='required' && <p className="errorMsg">El campo Contraseña es requerido</p>}
    <button type="submit" className="loginBtn">Login</button>
  </form>
  <p className="submitMsg">{message}</p>
  </dialog>
  {/* <div>
    <img className="backgroundImage" src={BackLogin} alt="" />
  </div> */}
  </div>
     
    
    
  )
};

export default Singup;

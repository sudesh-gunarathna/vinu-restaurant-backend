import React from "react";
import FormInput from "../common/FormInput";
import "./Register.css";
import { useState } from "react";
import SubmitButton from "../common/SubmitButton";
import toast from "react-hot-toast";
import axios from "axios";
import { api } from "../config";
import { useNavigate } from "react-router-dom";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confermPassword, setConfermPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async()=>{
     try{
        if (confermPassword !== password)
        {
            toast.error("Passwaord Don't Match")
            return;
        }
         // await axios.post(`${api}/auth/register`, {email: email, password:password}) 
         await axios.post(`${api}/auth/register`, {email, password}) // ES6
         toast.success("Registretion Successful")
         setEmail("");
         setPassword("");
         setConfermPassword("");
         navigate ('/login');

        }
     catch(err){
        console.log(err)
        toast.error("Something went wrong")

     }

  }
  return (
    <div className="center-div">
      <form className="register-container">
        <h2>Register</h2>
        <FormInput type="email" lable="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <FormInput type="password" lable="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <FormInput type="password" lable="Conferm Password" value={confermPassword} onChange={(e)=>setConfermPassword(e.target.value)} />
      
          <SubmitButton text='Submit' onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default Register;

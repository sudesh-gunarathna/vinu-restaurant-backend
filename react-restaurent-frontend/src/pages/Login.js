import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import FormInput from '../common/FormInput'
import SubmitButton from '../common/SubmitButton';
import { api } from '../config';
import { useGlobal } from '../GlobalContext';
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const{user, setUser} = useGlobal();
    const navigate = useNavigate();


    const handleLogin = async()=>{
        try{ 
          const result=  await axios.post (`${api}/auth/login`, {email, password},{withCredentials: true})
          //console.log(result.data)
          setUser(result.data)
          
          toast.success("Login Successful")
          setEmail("");
          setPassword("");
          navigate('/admin')

        }
        catch(err){
            console.log(err)
        toast.error("Invalied Credential")
        }


        
    }
          
    
  return (
    <div className="center-div">
     <form className="login-container">
        <h2>Login</h2>
        <FormInput type='email' lable="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}  />
        <FormInput type='password' lable="Password" value={password} onChange={(e)=>setPassword(e.target.value)} 
       onKeyDown={(e) => {
        if (e.keyCode === 13) {
          handleLogin();
        }
      }} />

          <SubmitButton text='Login' onClick={handleLogin}  />
        </form> 
       {/*  {user && user.email} */}
    </div>
  )
}

export default Login

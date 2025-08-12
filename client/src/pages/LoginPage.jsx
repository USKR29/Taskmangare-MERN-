import js from '@eslint/js';
import React, {useContext, useState } from 'react'
import { data } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContent';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate();

      const[email,setEmail]=useState('');
    
      const [password,setPassword]=useState('');

      const {dispatch} = useContext(AuthContext);
    
    
    const handlelogin=async(e)=>{

    e.preventDefault();

    const response = await fetch('/user/login',{
      method: 'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({email,password})
    }).then((res)=>{
      if(!res.ok){
        throw new Error('Login failed, check your credentials')
      }
      return res.json();
    }).then((data)=>{
      
      localStorage.setItem('token',JSON.stringify(data));
      dispatch({type:'LOGIN',payload:data});
      navigate('/');
      
    }).catch((err)=>{
      res.status(404).json({msg:err.message})
    })

  }

  return (
     <form className=' flex flex-col gap-4  w-96 h-3/4'>
            <label htmlFor='Email'>Email</label>
            <input className="border-1 border-sky-200 rounded-lg p-4" type='text' required={true} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor='password'>Password:</label>
            <input className="border-1 border-sky-200 rounded-lg p-4" autoComplete="true" type='password' required={true} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <label htmlFor="submit"></label>
            {email && password? <button  onClick={handlelogin} className="bg-green-200 w-fit p-1 self-center rounded-lg m-1 cursor-pointer">Login</button>:<div></div> }
           
        </form>
  )
}

export default LoginPage
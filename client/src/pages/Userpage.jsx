import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Userpage = () => {

  const[name, setName]=useState('');

  const[email,setEmail]=useState('');

  const [password,setPassword]=useState('');

  const handleClick=(e)=>{

    const user = {name, email, password}

    e.preventDefault();

    fetch('/user/signup',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(user)
    }).then((res)=>(
      res.ok ? res.json() : Promise.reject(
        toast.error('Failed to create user, please try again')
      )
     
    )).then(()=>{
      toast.success('User created successfully');
      setEmail('');
      setPassword('');
    })
    
  }


  return (

    <div className=" felx bg-white rounded-md p-4">
        <ToastContainer/>
        <form className=' flex flex-col gap-4  w-96 h-3/4'>
          <label htmlFor='Email'>Username</label>
            <input className="border-1 border-sky-200 rounded-lg p-4" type='text' required={true} value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <label htmlFor='Email'>Email</label>
            <input className="border-1 border-sky-200 rounded-lg p-4" type='text' required={true} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor='password'>Password:</label>
            <input className="border-1 border-sky-200 rounded-lg p-4" autoComplete="true" type='password' required={true} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <label htmlFor="submit"></label>
            {email && password? <button  onClick={handleClick} className="bg-green-200 w-fit p-1 self-center rounded-lg m-1 cursor-pointer">Signup</button>:<div></div> }
            
        </form>
        
    </div>
  
  )
}

export default Userpage
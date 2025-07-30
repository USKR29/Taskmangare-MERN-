import { useState } from "react";

const Userpage = () => {

  const[email,setEmail]=useState('');

  const [password,setPassword]=useState('');

  const handleClick=(e)=>{

    e.preventDefault();

    console.log('clicked')
  }


  return (

    <div className=" felx bg-white rounded-md p-4">
        
        <form className=' flex flex-col gap-4  w-96 h-3/4'>
            <label htmlFor='Email'>Email</label>
            <input className="border-1 border-sky-200 rounded-lg p-4" type='text' required={true} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor='password'>Password:</label>
            <input className="border-1 border-sky-200 rounded-lg p-4" autoComplete="true" type='password' required={true} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <label htmlFor="submit"></label>
            {email && password? <button disabled={true} onClick={handleClick} className="bg-green-200 w-fit p-1 self-center rounded-lg m-1 cursor-pointer">Signup</button>:<div></div> }
        </form>
    </div>
  
  )
}

export default Userpage
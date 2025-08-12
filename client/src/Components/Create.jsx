
import React, { useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';

const Create = () => {

  const handleclick =(e)=>{

    e.preventDefault();

    const status = 'Not started'

    const completed = false

    const task = {name, description, priority, duetime, status, completed}

    fetch('/api',{
      method: 'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify(task)
    }).then((res)=>{
      if(!res.ok){
         toast.error('Unable to add the task')
      }
      return res.json()
    }).then((data)=>{
      toast.success('Successfully added')
      setName('')
      setDescriptioin('')
      setPriority('')
      setDuetime('')
    }).catch((error)=>{

      console.log(error.message)
     
    })
  }


  const[name,setName] = useState('')
  const[description,setDescriptioin] = useState('')
  const[priority,setPriority] = useState('High')
  const[duetime,setDuetime] = useState('')
  return (
    <div className=' h-screen '>
        <form onSubmit={handleclick} className='flex flex-col gap-5 bg-white rounded-lg m-5 p-4 w-9/12'>
         <div className='flex items-center justify-center'>
           <label className='w-24 text-right pr-4'  htmlFor='name' >Title:</label>
          <input type='text' id='name' className=' flex border-gray-100 border-1 rounded-md p-1' name='name' value={name} required={true} onChange={(e)=> setName(e.target.value)}/>
           
         </div>
         <div className='flex items-center justify-center'>
           <label className='w-24 text-right pr-4'  htmlFor='desc'>Description:</label>
            <textarea id='desc' className='flex border-gray-100 border-1 rounded-md p-1'  value={description} required={true} onChange={(e)=> setDescriptioin(e.target.value)}/>
         </div>
         <div className='flex items-center justify-center'>
           <label className='w-24 text-right pr-4' htmlFor='prio'>Priority:</label>
            <select required={true} id='prio' value={priority} onChange={(e)=> setPriority(e.target.value)} className='flex p-1 border-gray-100 border-1 rounded-md'>
              <option>High</option>
              <option>Mid</option>
              <option>Low</option>
           </select>
         </div>
         <div className='flex items-center justify-center' >
           <label className='w-24 text-right pr-4' htmlFor='time'>DueTime:</label>
            <input id='time' type='date' value={duetime}  required={true} className='flex p-1 border-gray-100 border-1 rounded-md' onChange={(e)=> setDuetime(e.target.value)}/>
          
           </div>
         <button  type='submit' className='bg-sky-100 rounded-md p-2 w-16'>Add</button>
        </form>
       <ToastContainer/>
    </div>
    
  )
}

export default Create
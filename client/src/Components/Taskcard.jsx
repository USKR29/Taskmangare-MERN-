import React from 'react'
import TimeIcon from '../assets/time.svg';
import del from '../assets/deleteIcon.svg';
import done from '../assets/done.svg';
import { toast, ToastContainer } from 'react-toastify';

const Taskcard = ({data}) => {

 const handleclick=(id)=>{

    fetch(`api/${id}`,{
      method: 'PATCH',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({completed:true,'status':'Completed'})
    }).then((res)=>{
      if(!res.ok){
        res.send('no data')
      }
      return res.json()
      
    }).then((da)=>{
      console.log(da)
    }).catch((Error)=>{
      console.log(Error)
    })
  }

  const handleDelete=(id)=>{
    
    fetch(`/api/${id}`,{
      method: 'DELETE',
    }).then(()=>{
      toast.success('Deleted')
      
    })

  }

  return (
    <div>  
      <ToastContainer/>
         {data.map((item)=>{
        return <div className={item.completed?'bg-white border-2 border-red-200 m-2 p-4 rounded-3xl shadow-md': 'bg-white border-2 border-teal-200 m-2 p-4 rounded-3xl'} key={item._id}>
          <div className=' uppercase text-blue-800'>{item.name}</div>
          <div>Task: <span className='text-purple-600'>{item.description}</span></div>
          <div>Priority: <span className={item.priority === 'High'?`border-1 border-red-400 p-1 rounded-md`:` border-1 border-green-300 p-1 rounded-md`}>{item.priority}</span></div>
          <div className='flex justify-between'>
            <div className='flex items-center'><img src={TimeIcon} alt='' width={30}/>Due Time: {item.duetime}</div>
            {!item.completed? <div>
              <button onClick={()=>(handleclick(item._id))} className=' cursor-pointer border-1 border-black rounded-3xl p-2'>Mark completed</button>
              </div> : <div><button className='cursor-pointer' onClick={()=>handleDelete(item._id)}><img src={del}/></button></div>}
          </div>
          {item.status === 'Completed'? <div><img src={done}/></div>:<div className='bg-green-300 w-fit p-2 rounded-md'>{item.status}</div>}
           
          </div>
       })
       }
      
    </div>
    
  )
}

export default Taskcard

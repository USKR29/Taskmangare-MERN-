import React from 'react'
import { Link,  } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-72  justify-center items-center '>
        <div className='fixed bg-white shadow-gray-200 shadow-md rounded-2xl p-8 h-11/12 w-68 flex flex-col gap-6'>
        <Link to={'/'}><div className='flex justify-center border-1 w-36 rounded-2xl p-1 border-gray-300'>Dashboard</div></Link>
        <Link to={'/create'}><div className='flex justify-center border-1 w-36 rounded-2xl p-1 border-gray-300'>Add Task</div></Link>
        <div className='flex justify-center border-1 w-36 rounded-2xl p-1 border-gray-300'>Settings</div>
        <div className='flex justify-center border-1 w-36 rounded-2xl p-1 border-gray-300'>Logout</div>
        </div>
    </div>
  )
}

export default Sidebar
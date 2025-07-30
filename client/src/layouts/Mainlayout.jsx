import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

const Mainlayout = () => {
  return (
    <div>
        <div className='flex grid-cols-2 gap-2'>
        <div id='col1' className=' '><Sidebar/></div>
         <div id='col2' className=' w-full'>
            <Header/>
            
        <Outlet/>
         </div>
        </div>

        
       
       
    </div>
  )
}

export default Mainlayout
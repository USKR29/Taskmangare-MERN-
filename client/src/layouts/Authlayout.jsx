import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

const Authlayout = () => {
  return (
    <div>
        <Header/>
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            
            <Outlet/>
        </div>
        </div>
  )
}

export default Authlayout
import React from 'react'
import { Link,  } from 'react-router-dom'

function Header() {


  return (
    <div className=' flex justify-between bg-white shadow-sky-200 shadow-md h-12 items-center rounded-2xl p-2'>
        <Link to={'/'}><div className='text-green-700'>LOGO</div></Link>
        <div className='flex gap-2 justify-between items-center'>
          <div>Menu</div>
           <div id='profile' className='flex items-center justify-center rounded-full border-2 border-sky-300 w-8 h-8'>U</div>
        </div>
    </div>
  )
}

export default Header
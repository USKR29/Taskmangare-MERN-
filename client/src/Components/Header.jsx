import React, { useContext } from 'react'
import { Link,  } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContent'

function Header() {

  const {user} = useContext(AuthContext);


  return (
    <div className=' flex justify-between bg-white shadow-sky-200 shadow-md h-12 items-center rounded-2xl p-2'>
        <Link to={'/'}><div className='text-green-700'>LOGO</div></Link>
        <div className='flex gap-2 justify-between items-center'>
          <div>Menu</div>
          { user? (<div id='profile' className='flex items-center justify-center rounded-full border-2 border-sky-300 w-8 h-8'>{user.name}</div>): (<div><Link to={'/login'}>login</Link></div>)}
           
        </div>
    </div>
  )
}

export default Header

import Home from '../src/pages/Home'
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import Create from './Components/Create'
import Userpage from './pages/Userpage'
import Mainlayout from './layouts/Mainlayout'
import Authlayout from './layouts/Authlayout'
import { useContext } from 'react'
import { AuthContext } from './Context/AuthContent'
import LoginPage from './pages/LoginPage'



function App() {

 const {user} = useContext(AuthContext);


  return (
    <BrowserRouter>
   <div className=' h-full w-full'>
      

       <div >
        <Routes>
          <Route element={user?(<Mainlayout/>):(<Authlayout/>)}>
        <Route path='/' Component={Home}/>
        <Route path='/create' Component={Create}/>
        </Route>
        <Route element={<Authlayout/>}>
        <Route path='/signup' Component={Userpage}/>
        <Route path='/login' Component={LoginPage}/>
        </Route>
        </Routes>
        </div>
    </div>
    
  
   </BrowserRouter>
  )
  
}

export default App

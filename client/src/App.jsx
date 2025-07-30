
import Home from '../src/pages/Home'
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import Create from './Components/Create'
import Userpage from './pages/Userpage'
import Mainlayout from './layouts/Mainlayout'
import Authlayout from './layouts/Authlayout'
function App() {


  return (
    <BrowserRouter>
   <div className=' h-full w-full'>
      

       <div >
        
        <Routes>
          <Route element={<Mainlayout/>}>
        <Route path='/' Component={Home}/>
        <Route path='/create' Component={Create}/>
        </Route>
        <Route element={<Authlayout/>}>
        <Route path='/login' Component={Userpage}/>
        </Route>
        </Routes>
        </div>
    </div>
    
  
   </BrowserRouter>
  )
  
}

export default App

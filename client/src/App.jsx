
import Home from '../src/pages/Home'
import Header from '../src/Components/Header'
import Sidebar from './Components/Sidebar'
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import Create from './Components/Create'
function App() {


  return (
    <BrowserRouter>
   <div className='bg-sky-50 h-full w-full p-4'>
    <div className='flex grid-cols-2 gap-2'>
      
      <div id='col1' className=' '><Sidebar/></div>
       <div id='col2' className=' w-full'>
        <Header/>
        <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/create' Component={Create}/>
        </Routes>
        </div>
    </div>
    
   </div>
   </BrowserRouter>
  )
  
}

export default App

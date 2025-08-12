import React, { useContext, useEffect } from 'react'
import Taskcard from '../Components/taskCard'
import useFetch from '../Components/useFetch'
import { TaskContext } from '../Context/TaskContext';
import { AuthContext } from '../Context/AuthContent';
import Main from '../Components/Main';
import Userpage from './Userpage';




function Home() {

const{tasks}=useContext(TaskContext);
const{user}=useContext(AuthContext)

const {isloading, error} = useFetch('/api');


  return (
      <>
      {user? (<Main/>):(<div>Please login to add tasks </div>)}
      </>
  )
}

export default Home
import React, { useContext, useEffect } from 'react'
import Taskcard from '../Components/taskCard'
import useFetch from '../Components/useFetch'
import { TaskContext } from '../Context/TaskContext';




function Home() {

  const{tasks}=useContext(TaskContext);

const {isloading, error} = useFetch('/api');


  return (
      <div className='h-screen'>
      {isloading && <h1>Loading</h1>}
      {error && <div>Somthing went wrong: {error.message}</div>}
      {tasks? <Taskcard data={tasks}/> : <div>No new task</div>}
    </div>
  )
}

export default Home
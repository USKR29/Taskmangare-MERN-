import React from 'react'
import { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';
import { AuthContext } from '../Context/AuthContent';
import useFetch from './useFetch';
import Taskcard from './taskCard';

const Main = () => {
 const{tasks}=useContext(TaskContext);
const{user}=useContext(AuthContext)

const {isloading, error} = useFetch('/api');


  return (
      <div className='h-screen'>
      {isloading && <h1>Loading</h1>}
      {error && <div>You need to login to add/view tasks: {error.message}</div>}
      {tasks? <Taskcard data={tasks}/> : <div>No new task</div>}
    </div>
  )
}

export default Main
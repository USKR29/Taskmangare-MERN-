import React, { useContext, useEffect } from 'react'
import Taskcard from '../Components/taskCard'
import useFetch from '../Components/useFetch'



function Home() {


const {data, isloading, error} = useFetch('/api');

  return (
      <div className='h-screen'>
      {isloading && <h1>Loading</h1>}
      {error && <div>Somthing went wrong: {error.message}</div>}
      {data? <Taskcard data={data}/> : <div>No new task</div>}
    </div>
  )
}

export default Home
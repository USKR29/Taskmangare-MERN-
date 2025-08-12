import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../Context/TaskContext";

const useFetch=(url)=>{
 const {tasks,setTasks} = useContext(TaskContext);
  

      const[data,setData]=useState([]);
      const[isloading, setLoading] = useState(true);
      const[error,setError] = useState(null);
    

 useEffect(()=>{
 

  fetch(url).then((res)=>{
    if(!res.ok)
    {
      throw Error('Unable to fetch the data');
      setLoading(false)
    }  

    return res.json();
  
  }).then((details)=>{
    setData(details)
    setTasks(details)
    setLoading(false)
  }).catch((err)=>{
    setError(err.message);
    setLoading(false)
  });
   

 },[url, setTasks])
 
  return {data, isloading, error}
}

export default useFetch;
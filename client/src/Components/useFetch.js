import { useEffect, useState } from "react";


const useFetch=(url)=>{

      const[data,setData]=useState([]);
      const[isloading, setLoading] = useState(true);
      const[error,setError] = useState(null)

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
    setLoading(false)
  }).catch((err)=>{
    setError(err.message);
    setLoading(false)
  });
   

 },[url])
 
  return {data, isloading, error}
}

export default useFetch;
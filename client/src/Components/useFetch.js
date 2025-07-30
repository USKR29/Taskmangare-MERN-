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
  
  }).then((data)=>{
    setData(data)
    setLoading(false)
  }).catch((err)=>{
    setError(err.message);
    setLoading(false)
  });
   

 },[url,data])
 
  return {data, isloading, error}
}

export default useFetch;
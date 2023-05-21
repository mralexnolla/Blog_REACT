import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
     // const abortCont = new AbortController()

     // setTimeout(()=>{
        //  fetch('http://localhost:8000/blogs')
        //  .then(res => {
        //   if(res.ok){
        //     console.log(res)
        //     return res.json()
        //   }else{
        //     throw new Error(res.error)
        //   }
        //  })
        //  .then((data) => {
        //   setBlogs(data)
        //  })

        const fetchData = async () => {
          try {
            const res = await fetch(url/*, {signal: abortCont.signal}*/);
            if (res.ok) {
              const data = await res.json();
              setData(data);
              setIsLoading(false);
              setError(null);
            } else {
              throw Error("could not fetch the data for that resource");
            }
          } catch (error) {
            if(error === "AbortError"){
                console.log("Fetch Aborted")
            }else{
                setIsLoading(false);
                setError(error.message);
            }
            
          }
        };
        fetchData();
     // }, 1000)

     // return () => abortCont.abort()

    }, [url]);

    return { data, isLoading, error };
    
}

export default useFetch

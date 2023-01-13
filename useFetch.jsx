import axios from 'axios'
import {React,useEffect,useState} from 'react'



function useFetch(url) {
    const [error,setError] =useState(null)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchData =  async ()=>{
        try {
            const {data : response} = await axios(url)
            setData(response)
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
      
     }
    useEffect(() => {
        fetchData()

    }, [])
return      {loading,data,error}
}

    export default useFetch
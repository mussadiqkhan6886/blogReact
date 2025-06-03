import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useAxios = (baseUrl) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isMounted = true
        const source = axios.CancelToken.source()

        const fetchData = async (url) => {
            setIsLoading(true)
            try{
                 const response = await axios.get(url, {
                 cancelToken: source.token
                });
                if(isMounted){
                    setData(response.data)
                    setError(null)
                }
            }catch(err){
                if(isMounted){
                    setError(err.message)
                    setData([])
                }
            }finally{
                isMounted && setIsLoading(false)
            }
           
        }
        fetchData(baseUrl)

        return () => {
            isMounted = false
            source.cancel()
        }        

    }, [baseUrl])

    return {data, isLoading, error}
}

export default useAxios

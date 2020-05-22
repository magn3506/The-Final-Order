import { useState, useEffect } from "react"
import { local_server_path } from "../global_variables"
// SORUCE
// https://scotch.io/tutorials/create-a-custom-usefetch-react-hook

// COSTUM HOOK CREATED FOR FECTHING API
// RECIEVES URL AND OPTIONS
const useFetch = (url, options) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // !! USES VARIBALE FROM LOCAL PATH. THIS MAIGHT NEED TO CHANGE
        const res = await fetch(local_server_path + url, options)
        const status = await res.status
        if (status == 404) {
          setResponse("404")
          setIsLoading(false)
        }
        {
          const json = await res.json()
          setResponse(json)
          setIsLoading(false)
        }
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [])
  return { response, error, isLoading }
}
export default useFetch

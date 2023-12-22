import { useState, useEffect } from "react"
import axios from "axios"

const useAxios = ({ url, method = "GET", body = null, headers = null }) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await axios[method](url)

                setResponse(res)

            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        console.log("FETCH")

        fetchData()

    }, [url])

    return { response, error, loading }
}

export default useAxios
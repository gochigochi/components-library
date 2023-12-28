import { useState } from "react"
import axios from "axios"

const apiKey = import.meta.env.VITE_PIXABAY_API_KEY

const useInfiniteLoader = () => {

    const [items, setItems] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const loadItems = async (page) => {

        setLoading(true)

        try {

            const res = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=mountain&image_type=photo&orientation=vertical&page=${page}&per_page=20`,)

            setItems(prevItems => [...new Set([...prevItems, ...res.data.hits])])

        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    return { items, loadItems, loading, error }
}

export default useInfiniteLoader
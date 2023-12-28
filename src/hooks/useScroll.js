import { useState, useEffect } from "react"

const useBottomScroll = ({ elRef }) => {

    const [isBottom, setIsBottom] = useState(false)

    const handleScroll = () => {

        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            //DO SOMETHING AT WHEN SCROLL REACHES BOTTOM, AS FETCH NEW PAGE OF DATA, ETC
            //setIsBottom(true)
        } else {
            // setIsBottom(false)
        }
    }
    
    useEffect(() => {

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])
    
    return { isBottom }
}

export default useBottomScroll
import { useState, useEffect } from "react"

const useScrollElement = (elRef) => {

    const [isBottom, setIsBottom] = useState(false)
    const threshold = 1

    const handleScroll = () => {

        if (elRef) {

            const touched = elRef.scrollTop + elRef.offsetHeight + threshold >= elRef.scrollHeight

            setIsBottom(touched)
        }
    }

    useEffect(() => {

        if (elRef) {

            elRef.addEventListener("scroll", handleScroll)

            return () => elRef.removeEventListener("scroll", handleScroll)
        }


    }, [elRef])

    return { isBottom }
}

export default useScrollElement
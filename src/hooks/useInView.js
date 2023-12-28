import { useRef, useEffect, useState } from 'react'

const useInView = (options = {}) => {

    const ref = useRef()
    const observer = useRef()
    const [inView, setInView] = useState(false)

    useEffect(() => {

        observer.current = new IntersectionObserver(entries => {
            
            if (entries[0].isIntersecting) {
                setInView(true)
                observer.current.unobserve(ref.current)
            }
        }, options)

        observer.current.observe(ref.current)

        return () => observer.current.disconnect()

    }, [])


    return { ref, inView }
}

export default useInView
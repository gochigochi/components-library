export const jsx = `import useInView from "../../../../hooks/useInView"
import { Section, Card ... } from "./Styled"

const ObservedElement = ({ src, likes, tags, user, userImg }) => {

    const { ref, inView } = useInView({ threshold: [0.25] })

    return (
        <Section>
            <Card ref={ref} inView={inView}>
                ...
            </Card>
        </Section>
    )
}

export default ObservedElement






`

export const hooks = `import { useRef, useEffect, useState } from 'react'

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

export default useInView`
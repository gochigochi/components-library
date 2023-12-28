export const jsx = `//Gallery.jsx
import { useEffect, useRef } from "react"
import useScrollElement from "../hooks/useScrollElement"
import useInfiniteLoader from "../hooks/useInfiniteLoader"
import { Container, Img, Inner } from "./Styled"

const InfiniteScrollGallery = () => {

    const elRef = useRef(null)
    const page = useRef(1)
    const { items, loadItems, loading } = useInfiniteLoader()
    const { isBottom } = useScrollElement(elRef.current)

    useEffect(() => {
        loadItems(page.current)
    }, [])

    useEffect(() => { 
        if (isBottom) {
            page.current += 1
            loadItems(page.current)
        }
    }, [isBottom])

    return (
        <Container ref={elRef}>
            <Inner>
                {
                    items.length !== 0 ?
                        items.map(item => {
                            return (
                                <Img 
                                    key={item.id} 
                                    src={item.previewURL} 
                                    alt="" 
                                    loading="lazy"
                                />
                            )
                        }) : null
                }
            </Inner>
        </Container>
    )
}

export default InfiniteScrollGallery
`

export const styled = `import styled from "styled-components"

export const Container = styled.div\`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 2rem;
\`

export const Inner = styled.div\`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    grid-gap: 15px;
\`

export const Img = styled.img\`
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 6px;
\`
`

export const hooks = `//GET SCROLL POSITION INSIDE ELEMENT
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

//FETCH ON STATE CONDITIONS
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

            const res = await axios.get(\`...url/api/?key=\${apiKey}&page=\${page}&per_page=20\`,)

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
`
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
                        items.map((item, index) => {
                            return (
                                <Img key={index} src={item.webformatURL} alt=""/>
                            )
                        }) : null
                }
            </Inner>
        </Container>
    )
}

export default InfiniteScrollGallery
export const jsx = `//IMPLEMENTATION
const CustomScrollbar = () => {

    const [text, setText] = useState(shortText)

    return (
        <Container>
            <ButtonsContainer>
                <button onClick={() => setText(longText)}>Long text</button>
                <button onClick={() => setText(shortText)}>Short text</button>
            </ButtonsContainer>
            <Box>
                <CustomScrollbarHoc>
                    {text}
                </CustomScrollbarHoc>
            </Box>
        </Container>
    )
}





`

export const hoc = `const CustomScrollbarHoc = ({ children }) => {

    const contentRef = useRef(null)
    const trackRef = useRef(null)
    const thumbRef = useRef(null)
    const resizeObserver = useRef(null)
    const [thumbHeight, setThumbHeight] = useState(50)
    const [position, setPosition] = useState(0)
    const dragStartPosition = useRef(null)
    const isDragging = useRef(false)
    const initialScrollTop = useRef(null)

    const handleResize = useCallback(() => {
        const height = Math.max((contentRef.current?.clientHeight / contentRef.current?.scrollHeight) * trackRef.current?.clientHeight, 15)
        setThumbHeight(height)
        handleThumbPosition()
    }, [])

    const handleThumbPosition = useCallback(() => {
        const { scrollTop, scrollHeight } = contentRef.current
        const { clientHeight: trackHeight } = trackRef.current
        let newPosition = (scrollTop / scrollHeight) * trackHeight
        newPosition = Math.min(newPosition, trackHeight - thumbHeight)
        setPosition(newPosition)
    }, [])

    const handleThumbMouseDown = useCallback((e) => {
        e.preventDefault()
        e.stopPropagation()
        isDragging.current = true
        dragStartPosition.current = e.clientY
        initialScrollTop.current = contentRef.current.scrollTop
    }, [])

    const handleThumbMouseUp = useCallback((e) => {
        e.preventDefault()
        e.stopPropagation()
        isDragging.current = false
    }, [])

    const handleThumbMouseMove = useCallback((e) => {
        e.preventDefault()
        e.stopPropagation()

        if (isDragging.current) {
            const deltaY = (e.clientY - dragStartPosition.current) * (contentRef.current.offsetHeight / thumbRef.current.offsetHeight)
            const newScrollTop = initialScrollTop.current + deltaY
            contentRef.current.scrollTop = newScrollTop
        }
    }, [])

    useEffect(() => {

        handleThumbPosition()

        if (contentRef.current && trackRef.current) {

            resizeObserver.current = new ResizeObserver(() => handleResize())
            resizeObserver.current.observe(contentRef.current)
            contentRef.current.addEventListener("scroll", handleThumbPosition)

            return () => {
                resizeObserver.current?.disconnect()
                contentRef.current?.removeEventListener("scroll", handleThumbPosition)
            }
        }
    }, [children])

    useEffect(() => {

        if (thumbRef.current) {

            document.addEventListener("mousemove", handleThumbMouseMove)
            document.addEventListener("mouseup", handleThumbMouseUp)
            thumbRef.current.addEventListener("mousedown", handleThumbMouseDown)

            return () => {
                document.removeEventListener("mousemove", handleThumbMouseMove)
                document.removeEventListener("mouseup", handleThumbMouseUp)
                thumbRef.current?.removeEventListener("mousedown", handleThumbMouseDown)
            }
        }
    }, [])

    return (
        <>
            <Content ref={contentRef}>{children}</Content>
            <Track ref={trackRef} >
                <Thumb ref={thumbRef} height={thumbHeight} position={position} />
            </Track>
        </>
    )
}

export default CustomScrollbarHoc`

export const styled = `import styled from "styled-components"

export const Content = styled.div\`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 1rem;
    padding: 1rem;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
\`

export const Track = styled.div\`
    position: absolute;
    top: 50%;
    right: .2rem;;
    width: 1rem;
    height: calc(100% - .5rem);
    transform: translateY(-50%);
    border-radius: 50px;
    background-color: var(--ghost-color);
\`

export const Thumb = styled.div\`
    position: relative;
    width: 70%;
    margin: 0 auto;
    border-radius: 50px;
    background-color: var(--pale-red);
    cursor: pointer;
    top: ${({position}) => position + "px"};
    height: ${({height}) => height + "px"};
\``
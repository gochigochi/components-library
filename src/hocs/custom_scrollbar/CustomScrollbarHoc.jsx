import { useState, useEffect, useRef, useCallback } from "react"
import { Content, Track, Thumb } from "./Styled"

const CustomScrollbarHoc = ({ children }) => {

  const contentRef = useRef()
  const trackRef = useRef()
  const thumbRef = useRef()
  const resizeObserver = useRef()
  const [thumbHeight, setThumbHeight] = useState(50)
  const [position, setPosition] = useState(0)
  const dragStartPosition = useRef()
  const isDragging = useRef(false)
  const initialScrollTop = useRef()

  const handleResize = useCallback(() => {
    const height = Math.max((contentRef.current.clientHeight / contentRef.current.scrollHeight) * trackRef.current.clientHeight, 15)
    setThumbHeight(height)
    handleThumbPosition()
    console.log("resize")
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
    }

    return () => {
        resizeObserver.current?.unobserve(contentRef.current)
        contentRef.current.removeEventListener("scroll", handleThumbPosition)
    }

}, [children])

useEffect(() => {
    document.addEventListener("mousemove", handleThumbMouseMove)
    document.addEventListener("mouseup", handleThumbMouseUp)
    thumbRef.current.addEventListener("mousedown", handleThumbMouseDown)

    return () => {
        document.removeEventListener("mousemove", handleThumbMouseMove)
        document.removeEventListener("mouseup", handleThumbMouseUp)
        thumbRef.current.removeEventListener("mousedown", handleThumbMouseDown)
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

export default CustomScrollbarHoc
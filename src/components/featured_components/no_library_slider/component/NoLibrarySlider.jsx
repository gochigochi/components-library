import { useRef, useState, useEffect } from "react"
import useAxios from "../../../../hooks/useAxios"
import Pagination from "./pagination/Pagination"
import {
  Container,
  SwiperContainer,
  SwiperCard,
} from "./Styled"
import Navigation from "./navigation/Navigation"

const apiKey = import.meta.env.VITE_PIXABAY_API_KEY

const NoLibrarySlider = () => {

  const [index, setIndex] = useState(0)
  const [ids, setIds] = useState()
  const [cardWidth, setCardWidth] = useState()
  const swiperRef = useRef()
  const { response, error, loading } = useAxios({
    method: "get",
    url: `https://pixabay.com/api/?key=${apiKey}&q=forest-and-trees&image_type=photo&orientation=vertical&per_page=6`,
  })


  const handlePagination = (id) => {

    const newIndex = ids.indexOf(id)

    const offset = newIndex - index

    swiperRef.current.scrollBy({ left: cardWidth * offset, behavior: "smooth", })

    setIndex(newIndex)
  }

  useEffect(() => {

    if (response) {

      setCardWidth(swiperRef.current.children[0].offsetWidth)

      const ids = response.data.hits.map(hit => hit.id)
      setIds(ids)
    }
  }, [response])

  console.log(index, ids?.length)

  return (
    <Container>
      <SwiperContainer ref={swiperRef}>
        {
          response?.data.hits.map((hit, index) => {
            return (
              <SwiperCard key={hit.id}>
                <img src={hit.webformatURL} alt="" />
                <p style={{ "position": "absolute", "color": "#fff", "top": "10px", "left": "10px" }}>{index + 1}</p>
              </SwiperCard>
            )
          })
        }
      </SwiperContainer>
      <Navigation index={index} ids={ids} swiperRef={swiperRef} setIndex={setIndex} cardWidth={cardWidth} />
      <Pagination ids={ids} index={index} handlePagination={handlePagination}/>
    </Container>
  )
}

export default NoLibrarySlider
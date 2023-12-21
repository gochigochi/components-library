import PhoneFrame from "../../../phone_frame/PhoneFrame"
import useAxios from "../../../../hooks/useAxios"
import { Container } from "./Styled"
import ComponentLoader from "../../../loaders/component_loader/ComponentLoader"
import Gallery from "./gallery/Gallery"

const apiKey = import.meta.env.VITE_PIXABAY_API_KEY

const IgGallery = () => {

  const { response, error, loading } = useAxios({
    method: "get",
    url: `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=vertical&per_page=5`,
  })

  if (error) return <Container><p>Ocurrió un error</p></Container>

  return (
    <Container>
      <PhoneFrame>
        {
          loading ?
            <Container>
              <ComponentLoader />
            </Container> :
            <Gallery stories={response.data.hits} />
        }
      </PhoneFrame>
    </Container>
  )
}

export default IgGallery
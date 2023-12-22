import PhoneFrame from "../../../phone_frame/PhoneFrame"
import { Container } from "./Styled"
import ComponentLoader from "../../../loaders/component_loader/ComponentLoader"
import Gallery from "./gallery/Gallery"

const IgGallery = ({ stories, loading, error }) => {

  if (error) return <Container><p>Ocurrió un error</p></Container>

  return (
    <Container>
      <PhoneFrame>
        {
          loading ?
            <Container>
              <ComponentLoader />
            </Container> :
            <Gallery stories={stories} />
        }
      </PhoneFrame>
    </Container>
  )
}

export default IgGallery
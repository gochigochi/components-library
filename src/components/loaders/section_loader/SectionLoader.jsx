import ComponentLoader from "../component_loader/ComponentLoader"
import { Container } from "./Styled"

const SectionLoader = ({ ...props }) => {
  return (
    <Container {...props}>
        <ComponentLoader />
    </Container>
  )
}

export default SectionLoader
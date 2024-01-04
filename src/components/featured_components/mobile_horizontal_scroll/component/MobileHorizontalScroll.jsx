import Carousel from "./Carousel"
import { 
    Container,
    Header, 
    PhoneFrame,
    GhostLogo,
    GhostMenu,
    GhostComponent,
} from "./Styled"

const MobileHorizontalScroll = () => {
  return (
    <Container>
        <PhoneFrame>
            <Header>
                <GhostLogo />
                <GhostMenu />
            </Header>
            <Carousel />
            <GhostComponent />
            <GhostComponent />
        </PhoneFrame>
    </Container>
  )
}

export default MobileHorizontalScroll
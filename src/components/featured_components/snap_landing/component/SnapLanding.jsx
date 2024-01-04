import useAxios from "../../../../hooks/useAxios"
import {
    Container,
    Section,
    GhostBanner,
} from './Styled'

const apiKey = import.meta.env.VITE_PIXABAY_API_KEY

const SnapLanding = () => {

    const { response, error, loading } = useAxios({
        method: "get",
        url: `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=vertical&per_page=5`,
    })

    console.log(response)

    return (
        <Container>
            <Section>
                <GhostBanner>
                    <h2>Some Copy</h2>
                </GhostBanner>
            </Section>
            <Section>
                <GhostBanner>
                    <h2>25342</h2>
                </GhostBanner>
            </Section>
            <Section>
                <GhostBanner>
                    <h2>847684</h2>
                </GhostBanner>
            </Section>
            <Section>
                <GhostBanner>
                    <h2>078970</h2>
                </GhostBanner>
            </Section>
        </Container>
    )
}

export default SnapLanding
import useInView from "../../../../hooks/useInView"
import { FaRegBookmark } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa6"
import { 
    Section, 
    Header, 
    Bg, 
    BgOverlay, 
    Card, 
    Icon, 
    Icons, 
    UserImg, 
    UserName, 
} from "./Styled"

const ObservedElement = ({ src, likes, tags, user, userImg }) => {

    const { ref, inView } = useInView({ threshold: [0.25] })

    return (
        <Section>
            <Card ref={ref} inView={inView}>
                <Header>
                    <UserImg src={userImg} alt="" loading="lazy" />
                    <UserName>{user}</UserName>
                </Header>
                <Bg src={src} alt="" />
                <BgOverlay />
                <Icons>
                    <Icon>
                        <FaRegHeart />
                        <p>{likes}</p>
                    </Icon>
                    <Icon><FaRegBookmark /></Icon>
                </Icons>
            </Card>
        </Section>
    )
}

export default ObservedElement
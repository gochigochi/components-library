import { useState } from "react"
import { IoMenu } from "react-icons/io5"
import Menu from "./Menu"
import SROnly from "../../../general/SROnly"
import {
    Container,
    GhostBanner,
    GhostLogo,
    Header,
    IconContainer,
    Icon,
} from "./Styled"

const FlyoutMenu = () => {

    const [open, setOpen] = useState(false)

    return (
        <Container>
            <Header>
                    <GhostLogo />
                <IconContainer>
                    <Icon onClick={() => setOpen(!open)} aria-expanded={open} aria-haspopup="true">
                        <SROnly>Abrir menu</SROnly>
                        <IoMenu />
                    </Icon>
                    {
                        open ?
                            <Menu
                                open={open}
                                action={() => setOpen(false)}
                                role="menu"
                                aria-orientation="vertical"
                            />
                            : null
                    }
                </IconContainer>
            </Header>
            <GhostBanner />
        </Container>
    )
}

export default FlyoutMenu
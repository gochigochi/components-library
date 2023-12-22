export const jsx = `//FlyoutMenu.jsx
import { useState } from "react"
import { IoMenu } from "react-icons/io5"
import FlyoutMenu from "./FlyoutMenu"
import SROnly from "../../general/SROnly"
import {
    Container,
    Header,
    Icon,
    Inner,
} from "./Styled"
import Code from "./Code"

const FlyoutMenu = () => {

    const [open, setOpen] = useState(false)

    return (
        <Container>
            <Header>
                <Inner>
                    <Icon onClick={() => setOpen(!open)} aria-expanded={open} aria-haspopup="true">
                        <SROnly>Abrir menu</SROnly>
                        <IoMenu />
                    </Icon>
                    {
                        open ?
                            <FlyoutMenu
                                open={open}
                                action={() => setOpen(false)}
                                role="menu"
                                aria-orientation="vertical"
                            />
                            : null
                    }
                </Inner>
            </Header>
            <Code />
        </Container>
    )
}

export default FlyoutMenu

//Menu.jsx
import withClickOutside from '../../../hocs/withClickOutside'
import { MenuContainer } from './Styled'

const Menu = ({ content, ...props }) => {

    return (
        <MenuContainer id="clickable">
            <button role="menuitem">Profile</button>
            <button role="menuitem">Settings</button>
            <button role="menuitem">Logout</button>
        </MenuContainer>
    )
}

export default withClickOutside(Menu)("clickable")
`

export const styled = `import styled from "styled-components"

export const Container = styled.div\`
    width: 100%;
    height: 100%;
    position: relative;
\`

export const Header = styled.div\`
    width: 100%;
    padding: 1rem 3rem;
    display: flex;
    justify-content: flex-end;
\`

export const Inner = styled.div\`
    position: relative;
\`

export const Icon = styled.button\`
    font-size: 2rem;
    cursor: pointer;
    display: grid;
    place-items: center;
\`

export const MenuContainer = styled.div\`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: var(--soft-shadow);
    border-radius: 8px;
    position: absolute;
    z-index: 1;
    top: 2.5rem;
    right: 0;

    button {
        font-size: .9rem;
        cursor: pointer;
    }
\`
`

export const hoc = `import { useEffect } from "react"

const withClickOutside = (WrappedComponent) => (id) => {

    return (props) => {

        useEffect(() => {

            const handleClick = (e) => e.target.id !== id && props.action()

            const timer = setTimeout(() => window.addEventListener("click", handleClick), 200 )

            return () => {
                clearTimeout(timer)
                window.removeEventListener("click", handleClick)
            }
        })

        return <WrappedComponent {...props} />
    }
}

export default withClickOutside`
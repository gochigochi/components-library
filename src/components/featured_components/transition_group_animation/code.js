export const jsx = `//Modal.jsx
import { useRef } from 'react'
import withClickOutside from '../../../../hocs/withClickOutside'
import { CSSTransition } from 'react-transition-group'
import { PrimaryButton } from '../../../general/GlobalStyled'
import { Container } from './Styled'

const Modal = ({ open, action }) => {

    const nodeRef = useRef()

    return (
        <CSSTransition
            in={open}
            classNames="modal"
            timeout={1000}
            nodeRef={nodeRef}
            unmountOnExit
        >
            <Container id="modal-id" ref={nodeRef}>
                <p>お元気ですか</p>
                <PrimaryButton onClick={action}>閉じる</PrimaryButton>
            </Container>
        </CSSTransition>
    )
}

export default withClickOutside(Modal)("modal-id")`

export const styled = `import styled from "styled-components"

export const Container = styled.div\`
    position: absolute;
    width: 80%;
    max-width: 20rem;
    border-radius: 12px;
    padding: 2rem;
    background-color: #fff;
    box-shadow: var(--soft-shadow);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
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

export default withClickOutside

`
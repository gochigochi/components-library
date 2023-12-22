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

export default withClickOutside(Modal)("modal-id")

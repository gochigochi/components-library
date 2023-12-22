import { useState } from 'react'
import { ButtonsContainer, Container, GhostBox, GhostButton, Inner } from './Styled'
import { PrimaryButton } from '../../../general/GlobalStyled'
import Modal from '../component/Modal'

const Implementation = () => {

    const [modal, setModal] = useState(false)

    return (
        <Container>
            <Inner>
                <GhostBox />
                <ButtonsContainer>
                    <GhostButton></GhostButton>
                    <PrimaryButton onClick={() => setModal(!modal)} disabled={modal}>開ける</PrimaryButton>
                </ButtonsContainer>
            </Inner>
            <Modal open={modal} action={() => setModal(false)} />
        </Container>
    )
}

export default Implementation
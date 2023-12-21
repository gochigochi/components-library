import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5"
import { ButtonsContainer, Button } from "./Elements"

const Buttons = ({ handleBackwards, handleForward }) => {
    return (
        <ButtonsContainer>
            <Button pos="left" onClick={handleBackwards}>
                <IoArrowBackCircleOutline />
            </Button>
            <Button pos="right" onClick={handleForward}>
                <IoArrowForwardCircleOutline />
            </Button>
        </ButtonsContainer>
    )
}

export default Buttons
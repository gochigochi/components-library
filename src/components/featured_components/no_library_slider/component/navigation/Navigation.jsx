import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import { ButtonContainer, Icon } from "./Styled"

const Navigation = ({ index, ids, swiperRef, setIndex, cardWidth }) => {

    const handleSwipe = (direction) => {
        if (direction === "right" && index < ids.length) {
            swiperRef.current.scrollBy({ left: cardWidth, behavior: "smooth", })
            setIndex(index => index + 1)
        }

        if (direction === "left") {
            swiperRef.current.scrollBy({ left: -cardWidth, behavior: "smooth", })
            setIndex(index => index - 1)
        }
    }

    return (
        <>
            <ButtonContainer
                onClick={() => handleSwipe("right")}
                style={{ "right": "0" }}
            >
                <Icon>
                    <FaArrowRight />
                </Icon>
            </ButtonContainer>
            <ButtonContainer
                onClick={() => handleSwipe("left")}
                style={{ "left": "0" }}
            >
                <Icon>
                    <FaArrowLeft />
                </Icon>
            </ButtonContainer>
        </>
    )
}

export default Navigation
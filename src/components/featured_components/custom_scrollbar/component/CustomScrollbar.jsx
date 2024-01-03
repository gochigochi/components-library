import { useState } from "react"
import { Container, Box, ButtonsContainer } from "./Styled"
import CustomScrollbarHoc from "../../../../hocs/custom_scrollbar/CustomScrollbarHoc"
import { longText, shortText } from "../assets/text"

const CustomScrollbar = () => {

    const [text, setText] = useState(shortText)

    return (
        <Container>
            <ButtonsContainer>
                <button onClick={() => setText(longText)}>Long text</button>
                <button onClick={() => setText(shortText)}>Short text</button>
            </ButtonsContainer>
            <Box>
                <CustomScrollbarHoc>
                    {text}
                </CustomScrollbarHoc>
            </Box>
        </Container>
    )
}

export default CustomScrollbar
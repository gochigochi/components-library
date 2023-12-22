import { CiCircleCheck } from "react-icons/ci"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { Box, ProgressBarContainer, ProgressBar, Icon } from "./Styled"
import { useEffect } from "react"

const Toast = ({
    msg = "Toast notification",
    errorMsg = "Toast error",
    success = true,
    time = 3000,
    setter = () => { }
}) => {

    useEffect(() => {

        const timer = setTimeout(() => setter(false), time)

        return () => clearTimeout(timer)
    })

    return (
        <Box onClick={() => setter(false)}>
            <ProgressBarContainer>
                <ProgressBar t={time} />
            </ProgressBarContainer>
            <Icon>{success ? <CiCircleCheck /> : <IoIosCloseCircleOutline />}</Icon>
            <span>{success ? msg : errorMsg}</span>
        </Box>
    )
}

export default Toast
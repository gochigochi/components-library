export const jsx = `//Lazy import for implementation
const Toast = lazy(() => import('../component/Toast'))

const SampleComponent = () => {

    const [open, setOpen] = useState()
  
    //SOME CODE...

    return (
        //SOME JSX...
        <Suspense>
          {open ? <Toast msg="1 product added" setter={setOpen}/> : null}
        </Suspense>
    )
  }

//Toast.jsx
import { CiCircleCheck } from "react-icons/ci"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { Box, ProgressBarContainer, ProgressBar } from "./Styled"
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
`

export const styled = `import styled, { keyframes } from "styled-components"

export const Box = styled.div\`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    box-shadow: var(--soft-shadow);
    border-radius: 8px;
    padding: 18px;
    max-width: 330px;
    display: flex;
    align-items: center;
    overflow: hidden;
\`

const barProgress = keyframes\`
    from {
        transform: scaleX(0);
    } 
    to {
        transform: scaleX(1);
    }
\`

export const ProgressBarContainer = styled.div\`
    position: absolute;
    top: 5px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
\`

export const ProgressBar = styled.div\`
    position: relative;
    width: 90%;
    border-radius: 500px;
    height: 3px;
    transform-origin: left;
    background-color: var(--pale-red);
    cursor: pointer;
    transition: all .1s ease-in;
    animation: \${barProgress} \${({t}) => t}ms linear;
\`

export const Icon = styled.i\`
    display: grid;
    place-items: center;
    margin-right: .5rem;

    svg {
        font-size: 1.5rem;
        fill: var(--text-color);
    }
\`
`
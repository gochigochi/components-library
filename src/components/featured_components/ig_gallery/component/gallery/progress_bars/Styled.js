import styled, { keyframes } from "styled-components"

export const BarsContainer = styled.div`
    position: absolute;
    top: .7rem;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    display: grid;
    gap: .3rem;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
`

const barProgress = keyframes`
    from {
        width: 0;
    } 
    to {
        width: 100%;
    }
`

export const ProgressBar = styled.div`
    position: relative;
    height: .2rem;
    background-color: ${({ wasactive }) => wasactive ? "#fff" : "rgba(250, 250, 250, 0.3)"};
    cursor: pointer;
    transition: all .1s ease-in;
`

export const Bar = styled.div`
    background-color: #fff;
    animation: ${barProgress} 3s linear;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
`
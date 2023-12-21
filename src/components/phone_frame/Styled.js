import styled from "styled-components"

export const Device = styled.div`
    position: relative;
    width: 95%;
    max-width: 20rem;
    height: 30rem;
    border-radius: 18px;
    background-color: var(--ghost-color);
    box-shadow: var(--soft-shadow);

    &:before {
        content: "";
        position: absolute;
        width: 2.8rem;
        height: .5rem;
        border-radius: 50px;
        background-color: #ededed;
        top: .8rem;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const Screen = styled.div`
    position: relative;
    width: 90%;
    height: 26rem;
    margin: 2rem auto 1rem auto;
    border-radius: 6px;
    background-color: #fff;
    overflow: hidden;
`
import styled from "styled-components"

export const ButtonsContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: space-between;

    &:hover > button {
        opacity: 1;
    }

    &:hover > button > svg {
        transform: translateY(0);
        opacity: 1;
    }
`

export const Button = styled.button`
    height: 100%;
    width: 15%;
    max-width: 6rem;
    background-color: rgba(0, 0, 0, 0.04);
    display: grid;
    place-items: center;
    cursor: pointer;
    color: #fff;
    font-size: 2.2rem;
    opacity: 0;
    transition: opacity .2s;

    svg {
        transform: translateY(10px);
        opacity: 0;
        transition: opacity .4s, transform .5s;
    }

    @media all and (max-width: 600px) {
        opacity: 0;
        width: 50%;
        max-width: 1000;
    }
`
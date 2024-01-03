import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
`

export const ButtonsContainer = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    gap: .4rem;

    button {
        background-color: var(--ghost-color);
        padding: .5rem 1rem;
        border-radius: 50px;
    }
`

export const Box = styled.div`
    position: relative;
    width: 95%;
    max-width: 25rem;
    height: 20rem;
    max-height: 25rem;
    border: 1px solid var(--light-gray);
    border-radius: 8px;
    resize: both;
    overflow: auto;
`
    
export const Content = styled.div`
    height: 100%;
    position: absolute;
    top: 0;
    right: 1rem;
    padding: 1rem;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`

export const Track = styled.div`
    position: absolute;
    top: 50%;
    right: .2rem;;
    width: 1rem;
    height: calc(100% - .5rem);
    transform: translateY(-50%);
    border-radius: 50px;
    background-color: var(--ghost-color);
`

export const Thumb = styled.div`
    position: relative;
    width: 70%;
    margin: 0 auto;
    border-radius: 50px;
    background-color: var(--pale-red);
    cursor: pointer;
    top: ${({position}) => position + "px"};
    height: ${({height}) => height + "px"};
`
import styled from "styled-components"

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
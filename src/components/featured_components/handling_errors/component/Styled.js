import styled from "styled-components"

export const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    padding: 1rem;
    gap: 1rem;
`

export const GhostHeader = styled.div`
    grid-area: 1 / 1 / span 1 / span 7;
    background-color: var(--ghost-color);
    border-radius: 12px;
`

export const GhostSidebar = styled.div`
    grid-area: 2 / 1 / span 5 / span 1;
    background-color: var(--ghost-color);
    border-radius: 12px;
`


export const Card = styled.div`
    position: relative;
    grid-column: span 3;
    grid-row: span 5;
    background-color: var(--ghost-color);
    border-radius: 12px;
    display: grid;
    place-items: center;
    overflow: hidden;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
    }
`

export const Buttons = styled.div`
    display: grid;
    gap: 1rem;

    p {
        text-align: center;
        font-size: .8rem;
    }
`
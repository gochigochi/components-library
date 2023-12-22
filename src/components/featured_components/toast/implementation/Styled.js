import styled from "styled-components"

export const Container = styled.div`
    width: 95%;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;

    @media all and (max-width: 760px) {
        grid-template-columns: 1fr;
    }
`

export const Content = styled.div`
    display: grid;
`

export const GhostBox = styled.div`
    height: 400px;
    background-color: var(--ghost-color);
    border-radius: 12px;

    @media all and (max-width: 760px) {
        height: 15rem;
        width: 100%;
    }
`

export const GhostTitle = styled.div`
    width: 20rem;
    height: 3rem;
    background-color: var(--ghost-color);
    border-radius: 6px;
    margin-bottom: 1rem;

    @media all and (max-width: 760px) {
        height: 1rem;
        width: 100%;
    }
`
import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: var(--ghost-color);
`

export const Inner = styled.div`
    background-color: #fff;
    border-radius: 12px;
    padding: 2rem;
    width: 90%;
    max-width: 25rem;
    height: 30rem;
    display: grid;
    box-shadow: var(--soft-shadow);
`

export const ButtonsContainer = styled.div`
    align-self: end;
    display: flex;
    justify-content: space-between;
`

export const GhostBox = styled.div`
    width: 100%;
    height: 15rem;
    border-radius: 6px;
    background-color: var(--ghost-color);
`

export const GhostButton = styled.div`
    width: 4rem;
    height: 1rem;
    border-radius: 50px;
    backgroud-color: var(--ghost-color);
`

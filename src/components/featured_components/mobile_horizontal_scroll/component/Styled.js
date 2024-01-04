import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: var(--ghost-color);
`

export const PhoneFrame = styled.div`
    height: 28rem;
    width: 95%;
    max-width: 20rem;
    background-color: #fff;
    border-radius: 22px;
    box-shadow: var(--soft-shadow);
    overflow: hidden;
`

export const Header = styled.div`
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`

export const GhostLogo = styled.div`
    width: 8rem;
    height: 3rem;
    border-radius: 500px;
    background-color: var(--ghost-color);
`

export const GhostMenu = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 500px;
    background-color: var(--ghost-color);
`

export const GhostComponent = styled.div`
    border-radius: 12px;
    background-color: var(--ghost-color);
    margin: 1rem;
    display: flex;
    height: 10rem;
`
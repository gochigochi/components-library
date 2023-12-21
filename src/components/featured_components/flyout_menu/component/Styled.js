import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const Header = styled.div`
    width: 95%;
    margin: 0 auto;
    padding: 1rem 0 .2rem 0;
    display: flex;
    justify-content: space-between;
`

export const IconContainer = styled.div`
    position: relative;
`

export const Icon = styled.button`
    font-size: 2rem;
    cursor: pointer;
    display: grid;
    place-items: center;
`

export const MenuContainer = styled.div`
    padding: 1.2rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #fff;
    box-shadow: var(--soft-shadow);
    border-radius: 8px;
    position: absolute;
    z-index: 1;
    top: 2.5rem;
    right: 0;

    button {
        font-size: .9rem;
        cursor: pointer;
    }
`

// GHOST COMPONENTS
export const GhostLogo = styled.div`
    width: 8rem;
    height: 2rem;
    border-radius: 6px;
    background-color: var(--ghost-color);
`

export const GhostBanner = styled.div`
    width: 95%;
    height: 25rem;
    margin: 1.5rem auto 0 auto;
    border-radius: 12px;
    background-color: var(--ghost-color);
`
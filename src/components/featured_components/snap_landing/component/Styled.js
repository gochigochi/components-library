import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    scroll-snap-type: y mandatory;
`

export const Section = styled.section`
    flex: 1 0 100%;
    padding: 3rem;
    display: flex;
    scroll-snap-align: start;
`

export const GhostBanner = styled.div`
    flex: 1 0 100%;
    border-radius: 18px;
    background-color: var(--ghost-color);
`
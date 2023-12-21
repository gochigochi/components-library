import styled from "styled-components"

export const Section = styled.div`
    width: 100%;
`

export const SectionHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`

export const ButtonBadge = styled.button`
    background-color: ${({active}) => active ? "var(--pale-red)" : "var(--light-gray)"};
    border-radius: 50px;
    padding: .2rem .8rem;
`

export const SectionTitle = styled.h1`
    margin-bottom: 1rem;
`

export const Component = styled.div`
    height: 35rem;
    margin: 0 auto;
    border: 1px solid var(--light-gray);
    border-radius: 12px;
    overflow-y: auto;
    position: relative;
`
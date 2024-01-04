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
    font-weight: bold;

    svg { 
        font-size: 1.5rem;
    }
`

export const SectionTitle = styled.h1`
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: bold;
`

export const Component = styled.div`
    height: 35rem;
    margin: 0 auto;
    border: 1px solid var(--light-gray);
    border-radius: 12px;
    overflow-y: auto;
    position: relative;
    resize: ${({resize}) => resize && "horizontal"};
    max-width: 100%;
`

export const PrimaryButton = styled.button`
    padding: .6rem 1.6rem;
    border-radius: 50px;
    background-color: var(--pale-red);
    color: #fff;
    transition: all .2s;

    &:disabled {
        background-color: var(--text-color);
        cursor: default;
        opacity: .4;
    }

    &:hover {
        opacity: .8;
    }

    &:disabled:hover {
        opacity: .4;
    }
`
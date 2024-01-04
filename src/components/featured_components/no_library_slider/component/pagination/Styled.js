import styled from "styled-components"

export const PaginationContainer = styled.div`
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: .3rem;
`

export const Dot = styled.div`
    width: .8rem;
    height: .8rem;
    border-radius: 50px;
    background-color: ${({active}) => active ? "var(--pale-red)" : "var(--light-gray)"};
    cursor: pointer;
`
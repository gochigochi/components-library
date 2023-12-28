import styled from "styled-components"

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 2rem;
`

export const Inner = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    grid-gap: 15px;
`

export const Img = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 6px;
`
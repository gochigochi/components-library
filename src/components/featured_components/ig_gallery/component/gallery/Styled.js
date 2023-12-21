import styled from "styled-components"

export const GalleryContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: ${({show}) => show ? "block" : "none"};
`
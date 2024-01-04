import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
`

export const SwiperContainer = styled.div`
    position: relative;
    --gap: .2rem;
    width: 100%;
    display: flex;
    gap: var(--gap);
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
`

export const SwiperCard = styled.div`
    position: relative;
    flex: 1 0 calc(25% - var(--gap));
    height: 25rem;
    //aspect-ratio: 3/4; //to make flow hight
    border-radius: 8px;
    overflow: hidden;
    scroll-snap-align: start;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
    }
`
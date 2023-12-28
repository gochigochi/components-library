import styled from "styled-components"

export const Inner = styled.div`
    background-color: var(--ghost-color);
`

export const Section = styled.section`
    height: 35rem;
    display: grid;
    place-items: center;
`

export const Card = styled.article`
    width: 90%;
    max-width: 15rem;
    height: 20rem;
    background-color: #fff;
    box-shadow: var(--shoft-shadow);
    border-radius: 12px;
    opacity: ${({inView}) => inView ? "1" : "0"};
    scale: ${({inView}) => inView ? "1" : ".7"};
    transform: translateY(${({inView}) => inView ? "0" : "1rem"});
    transition: scale .2s, transform .4s;
    position: reltive;
    overflow: hidden;

    &:hover div {
        opacity: 1;
    }
`

export const Header = styled.div`
    position: relative;
    height: 4rem;
    display: flex;
    align-items: center;
    padding: .8rem;
    opacity: 0;
    transition: opacity. 3s;
    z-index: 1;
`

export const UserImg = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50px;
    object-fit: cover;
`

export const UserName = styled.p`
    color: #fff;
    margin-left: 1rem;
`

export const Bg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`

export const BgOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.4);
    transition: opacity .2s;
`

export const Icons = styled.div`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    opacity: 0;
    transition: opacity .2s;
    display: flex;
    flex-direction: column;
    z-index: 0;
`

export const Icon = styled.i`
    font-size: 1.2rem;
    margin-bottom: .5rem;

    p {
        color: #fff;
        font-size: .7rem;
        text-align: center;
    }

    svg {
        fill: #fff;
    }
`
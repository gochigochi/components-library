import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
`

export const FileDropZone = styled.section`
    position: relative;
    border: 2px dashed var(--light-gray);
    padding: 1rem;
    border-radius: 12px;
    overflow: hidden;
    height: auto;
    width: 95%;
    max-width: 20rem;
    height: 20rem;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({dragging}) => dragging ? "var(--ghost-color)" : "transparent"};
    transition: all .2s ease-in-out;
`

export const InputHtml = styled.input`
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    text-transform: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`

export const DropText = styled.p`
    color: var(--text-color);
    margin-bottom: .5rem;

    span {
        color: var(--pale-red);
        text-decoration: underline;
    }
`

export const Icon = styled.i`
    svg {
        font-size: 4rem;
        fill: var(--pale-red);
    }
`

export const PreviewImage = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 500px;
    object-fit: cover;
    box-shadow: var(--soft-shadow);
`

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`
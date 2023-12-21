import styled, { keyframes } from "styled-components"

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`

const stretch = keyframes`
    0% {
    stroke-dasharray: 0, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 75, 150;
    stroke-dashoffset: -25;
  }
  100% {
    stroke-dashoffset: -100;
  }
`

export const Svg = styled.svg`
    height: 40px;
    width: 40px;
    transform-origin: center;
    animation: ${rotate} 2s linear infinite;
    will-change: transform;
    overflow: visible;
`

export const Track = styled.circle`
    fill: none;
    stroke: var(--ghost-color);
    opacity: 0;
    transition: stroke 0.5s ease;
`

export const Piece = styled.circle`
    fill: none;
    stroke: #ededed;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: ${stretch} 2.7s ease-in-out infinite;
    will-change: stroke-dasharray, stroke-dashoffset;
    transition: stroke 0.5s ease;
`
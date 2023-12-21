import React from 'react'
import { Piece, Svg, Track } from './Styled'

const ComponentLoader = () => {
    return (
        <Svg
            viewBox="0 0 40 40"
            height="40"
            width="40"
        >
            <Track
                cx="20"
                cy="20"
                r="17.5"
                pathlength="100"
                stroke-width="5px"
                fill="none"
            />
            <Piece
                cx="20"
                cy="20"
                r="17.5"
                pathlength="100"
                stroke-width="5px"
                fill="none"
            />
        </Svg>
    )
}

export default ComponentLoader
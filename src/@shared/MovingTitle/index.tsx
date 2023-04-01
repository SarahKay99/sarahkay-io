import React from "react"
import { MovingTitleWrapper } from "./index.style";

interface MovingTitleWrapperProps {
    text: string
    caps?: boolean
    fontSize?: string
}

function MovingTitle({
    text, 
    caps=true,
    fontSize="30px"
}: MovingTitleWrapperProps) {
    return <MovingTitleWrapper fontSize={fontSize}>
        <h1>{caps ? text.toLocaleUpperCase() : text}</h1>
    </MovingTitleWrapper>
}

export default MovingTitle;
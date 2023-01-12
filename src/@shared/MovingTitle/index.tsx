import React from "react"
import { MovingTitleWrapper } from "./index.style";

interface MovingTitleWrapperProps {
    text: string
}

function MovingTitle({text}: MovingTitleWrapperProps) {
    return <MovingTitleWrapper>
        {text}
    </MovingTitleWrapper>
}

export default MovingTitle;
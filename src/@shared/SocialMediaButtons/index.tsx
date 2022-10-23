import React from "react"

import { SocialMediaButtonsWrapper } from "./index.style"

interface SocialMediaButtonsProps {
    size: 'big' | 'small'
}

function SocialMediaButtons({size}: SocialMediaButtonsProps) {
    return <SocialMediaButtonsWrapper size={size}>

    </SocialMediaButtonsWrapper>
}

export default SocialMediaButtons;
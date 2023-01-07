/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react"

import { SocialMediaButtonsWrapper } from "./index.style"

interface SocialMediaButtonsProps {
    size: string
    margin?: string
    direction: 'vertical' | 'horizontal'
}

function SocialMediaButtons({
    size,
    margin,
    direction
}: SocialMediaButtonsProps) {
    return <SocialMediaButtonsWrapper size={size} direction={direction} margin={margin}>
        <a href="https://github.com/SarahKay99" target="_blank"><img src="github.png"/></a>
        <a href="https://www.linkedin.com/in/sarah-kay-921781197/" target="_blank"><img src="linkedIn.png"/></a>
        <a href="https://www.instagram.com/sarahkay.js/" target="_blank"><img src="instagram.png"/></a>
        <a href="https://twitter.com/cryptocalcium" target="_blank"><img src="twitter.png"/></a>
        <a href="https://www.facebook.com/sarah.kay.692/" target="_blank"><img src="facebook.png"/></a>
        
        <a href="https://open.spotify.com/user/n9t77rt95seku17x5zefaw4p8" target="_blank"><img src="spotify.png"/></a>
        <a href="https://www.goodreads.com/user/show/160376007-sarah-kay" target="_blank"><img src="goodreads.png"/></a>
        <a href="" target="_blank"><img src="naturesgem.png"/></a>
    </SocialMediaButtonsWrapper>
}

export default SocialMediaButtons;
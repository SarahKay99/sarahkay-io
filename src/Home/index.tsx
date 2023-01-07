import React from "react"
import Carousel from "src/@shared/Carousel";
import Page from "src/@shared/Page";
import SocialMediaButtons from "src/@shared/SocialMediaButtons";

import { HomePageWrapper } from "./index.style"

// TODO: Build a very basic Django backend to keep track of the photos securely.
const placeholderItems = [
    "",
    "",
    ""
]

function HomePage() {
    return <Page uri={"/"}>
        <HomePageWrapper>
            <SocialMediaButtons 
                size="7vw" 
                direction="vertical" 
                margin={"0vw 6vw 0vw 0vw"} 
            />
            <Carousel 
                items={placeholderItems}
                border={"solid white 3px"}
            />

            <h1 className="title">Sarah Kay</h1>
            <h2 className="subtitle">Software Developer, Artist</h2>

            <a href="" target="_blank">Crafts Store</a>
            <a href="/portfolio">Development Portfolio</a>
            <a href="/about">Blog</a>
            <a href="/about">About Me</a>
            
            <a href="/contact" target="_blank" className="contactMe">Contact Me</a>

        </HomePageWrapper>
    </Page>
}

export default HomePage;
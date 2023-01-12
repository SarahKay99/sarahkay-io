import { placeholderItems } from "../@context/_constants";
import React from "react"
import Carousel from "src/@shared/Carousel";
import Page from "src/@shared/Page";
import SocialMediaButtons from "src/@shared/SocialMediaButtons";

import { HomePageWrapper } from "./index.style"

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

            <div className="mainText">
                <h1 className="title">Sarah Kay</h1>
                <h2 className="subtitle">Software Developer, Artist</h2>

                <div className="links">
                    <a href="" target="_blank">Crafts Store</a>
                    <a href="/portfolio">Development Portfolio</a>
                    <a href="/about">Blog</a>
                    <a href="/about">About Me</a>
                </div>
                
                <a href="/contact" target="_blank" className="contactMe">Contact Me</a>
            </div>

        </HomePageWrapper>
    </Page>
}

export default HomePage;
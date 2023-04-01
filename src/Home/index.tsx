import { placeholderItems } from "../@context/_constants";
import React from "react"
import Carousel from "src/@shared/Carousel";
import Page from "src/@shared/Page";
import SocialMediaButtons from "src/@shared/SocialMediaButtons";

import { HomePageWrapper } from "./index.style"
import { useSettings } from "../@context/settings";

function HomePage() {
    const { colorTheme } = useSettings();

    return <Page uri={"/"}>
        <HomePageWrapper>
            <SocialMediaButtons 
                size="8vh" 
                direction="vertical" 
                margin={"0vw 6vw 0vw 0vw"} 
            />
            <Carousel 
                items={placeholderItems}
                border={"solid white 3px"}
                maxHeight={"60vw"}
                maxWidth={"30vw"}
            />

            <div className="mainText">
                <h1 className="title">SARAH KAY</h1>
                <h2 className="subtitle">Software Developer, Artist</h2>

                <div className="links">
                    {/* <a href="" target="_blank">Crafts Store</a> */}
                    <a href="/portfolio">{colorTheme.emoji} Development Portfolio {colorTheme.emoji}</a>
                    <a href="/about">{colorTheme.emoji} Blog {colorTheme.emoji}</a>
                    <a href="/about">{colorTheme.emoji} About Me {colorTheme.emoji}</a>
                </div>
                
                <a href="/contact" target="_blank" className="contactMe">Contact Me</a>
            </div>

        </HomePageWrapper>
    </Page>
}

export default HomePage;
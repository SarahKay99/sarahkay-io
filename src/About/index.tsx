import { placeholderItems } from "../@context/_constants";
import React from "react"
import Carousel from "src/@shared/Carousel";
import MovingTitle from "src/@shared/MovingTitle";
import Page from "src/@shared/Page";
import SocialMediaButtons from "src/@shared/SocialMediaButtons";

import { AboutWrapper, ContentFlexbox } from "./index.style";
import { useSettings } from "../@context/settings";

function AboutPage() {

    const { colorTheme } = useSettings();

    return <Page uri={"/about"}>
        <AboutWrapper>
            <div className="titleWrapper">
                <MovingTitle text="About Me" />
            </div>

            <ContentFlexbox>
                <SocialMediaButtons
                    size="5vh" 
                    direction="vertical" 
                    margin={"0vw 2vw 0vw 0vw"} 
                    alignment={"flex-end"}
                />

                <div className="carouselPosition">
                    <Carousel 
                        items={placeholderItems}
                        border={"solid white 3px"}
                        maxHeight={"30vh"}
                        maxWidth={"30vh"}
                    />
                </div>

                <div className="description">
                    Hi, my name is Sarah. I'm a Software Developer, App Designer, Artist and English Teacher based in Melbourne, Australia.
                    On this site you can find many of the things I do and <a href="/contact">contact me</a> if any of my services interest you. 
                    You can see my... 
                    
                    <ul>
                        <li><a href="/portfolio?searchOption=software">Portfolio</a></li>
                        <li><a href="/portfolio?searchOption=art">Visual Art</a></li>
                        <li><a href="/blog?searchOption=poetry">Poetry</a></li>
                        <li><a href="/blog?searchOption=opinion">Opinions</a> </li>
                    </ul>

                    I make earrings, necklaces and other cool items at a boutique called <a target="_blank">Nature's Gems</a>. 
                    Over at Nature's Gems we create quality crafts & jewellery from real flowers. 
                    If you are interested at all in boutique jewelery and home equipment, take a look at what we have to offer~
                    
                    <p>
                        &emsp;&nbsp;{colorTheme.emoji} To enquire about my services in software development, <a href="/contact?for=software">click here</a>.<br/>
                        &emsp;&nbsp;{colorTheme.emoji} To enquire about English teaching or tutoring from me, <a href="/contact?for=tutoring">click here</a>.<br/>
                        &emsp;&nbsp;{colorTheme.emoji} To enquire about anything craft or jewelry related, visit <a href="" target="_blank">Nature's Gems Instagram</a> and DM us.<br/>
                        &emsp;&nbsp;{colorTheme.emoji} To enquire about any of my art, such as paintings, visit <a href="" target="_blank">my Artstagram</a> and DM me.<br/>
                    </p>

                    <p className="flex">
                        This site was 100% designed and programmed by me.<br/>
                        <i>Designs done with:</i> Figma<br/>
                        <i>Code done with:</i> React.js
                    </p>
                </div>
            </ContentFlexbox>
        </AboutWrapper>
    </Page>
}

export default AboutPage;
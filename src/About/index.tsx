import { placeholderItems } from "../@context/_constants";
import React from "react"
import Carousel from "src/@shared/Carousel";
import MovingTitle from "src/@shared/MovingTitle";
import Page from "src/@shared/Page";
import SocialMediaButtons from "src/@shared/SocialMediaButtons";

import { AboutWrapper } from "./index.style";

function AboutPage() {
    return <Page uri={"/"}>
        <AboutWrapper>
            <MovingTitle text="About Me" />

            <SocialMediaButtons 
                size="7vw" 
                direction="vertical" 
                margin={"0vw 6vw 0vw 0vw"} 
            />
            <Carousel 
                items={placeholderItems}
                border={"solid white 3px"}
            />

            <div className="description">
                Hi! My name is Sarah. I'm a software developer, artist and English teacher based in Melbourne, Australia.
                On this site you can find the many things I do and contact me if any of my services interest you. 
                You can see my... 
                
                <ul>
                    <li><a href="/portfolio?searchOption=art">Visual Art</a></li>
                    <li><a href="/blog?searchOption=poetry">Poetry</a></li>
                    <li><a href="/portfolio?searchOption=software">Development portfolio</a></li>
                    <li><a href="/blog?searchOption=opinion">Opinions</a> </li>
                </ul>

                <br />

                I am the founder of a boutique called <a target="_blank">Nature's Gems</a>. 
                Over at Nature's Gems we create quality crafts & jewellery out of real flowers. 
                If you are interested at all in boutique jewelery and home equipment, take a look at what we have to offer~.
                
                <br />
                To enquire about my services in software development, <a href="/contact?for=software">click here</a>.
                <br />
                To enquire about English teaching or tutoring from me, <a href="/contact?for=tutoring">click here</a>.
                <br />
                To enquire about anything craft or jewelry related, <a href="" target="_blank">visit Nature's Gems Instagram</a> and DM us.
                <br />
                To enquire about any of my art, such as paintings, <a href="" target="_blank">visit my Artstagram</a> and DM me.
            </div>
        </AboutWrapper>
    </Page>
}

export default AboutPage;
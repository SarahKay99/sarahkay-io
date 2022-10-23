import React from "react"
import Page from "src/@shared/Page";

import { HomePageWrapper } from "./index.style"

function HomePage() {
    return <Page uri={"/"}>
        <HomePageWrapper>
            Hi! My name is Sarah. I'm an Australian software developer and artist. On this site you can find <a>my creations</a>, <a>my development portfolio</a> and <a>my opinions</a>. 

            Some things I like doing other than software development are...
            <ul>
                <li>walking</li>
                <li>taking photos of nature</li>
                <li>surfing</li>
                <li>drawing</li>
                <li>playing music</li>
                <li>travelling, wandering</li>
                <li>astrology, spirituality</li>
                <li>doomsday prepping</li>
            </ul>

            If you want to <a href="/">hire my services</a>, or if you want to surf together, <a href="">hit me up 😈</a>
        </HomePageWrapper>
    </Page>
}

export default HomePage;
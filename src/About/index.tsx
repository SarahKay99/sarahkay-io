import React from "react"
import Page from "src/@shared/Page";

import { AboutWrapper } from "./index.style";

function AboutPage() {
    return <Page uri={"/"}>
        <AboutWrapper>
            Hi. My name is Sarah. I'm an Australian software developer and artist. On this site you can find <a href="">my creations</a>, <a href="/portfolio">my development portfolio</a> and <a href="/blog">my opinions</a>. 
            <a href="">Click here</a> if you want to hire my services.
        </AboutWrapper>
    </Page>
}

export default AboutPage;
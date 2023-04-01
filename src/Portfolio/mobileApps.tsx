import React from "react"
import MovingTitle from "src/@shared/MovingTitle";
import Page from "src/@shared/Page";
import { PortfolioPageWrapper } from "./index.style";

function MobileAppsPage() {
    return <Page uri={"/portfolio/mobileApps"}>
        <PortfolioPageWrapper>
            <div className="titleWrapper">
                <MovingTitle text="Portfolio" />
                Web App Development
                Mobile App Developmment
                Web Designs
                Mobile App Designs
                Digital Artwork
            </div>
        </PortfolioPageWrapper>
    </Page>
}

export default PortfolioPage;
import React from "react"
import MovingTitle from "src/@shared/MovingTitle";
import Page from "src/@shared/Page";

import { ContactPageWrapper } from "./index.style";

function ContactPage() {
    return <Page uri={"/contact"}>
        <ContactPageWrapper>
            <div className="titleWrapper">
                <MovingTitle text="Contact" />
            </div>
        </ContactPageWrapper>
    </Page>
}

export default ContactPage;
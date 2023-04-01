import React from "react"
import MovingTitle from "src/@shared/MovingTitle";
import Page from "src/@shared/Page";

import { BlogPageWrapper } from "./index.style"

function BlogPage() {
    return <Page uri={"/blog"}>
        <BlogPageWrapper>
            <div className="titleWrapper">
                <MovingTitle text="Blog" />
            </div>
        </BlogPageWrapper>
    </Page>
}

export default BlogPage;
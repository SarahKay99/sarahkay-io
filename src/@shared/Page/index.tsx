import React, { ReactNode } from "react"

import Header from "../Header"
import Settings from "../Settings"
import { PageWrapper } from "./index.style"

interface PageProps {
    children: ReactNode
    title?: string
    uri?: string
    description?: string
}

function Page({
    children,
    /* later props are for SEO, if you choose to add it later. */
    uri,
    title,
    description
}: PageProps) {
    return <PageWrapper>
        <Header />

        <div className="settingsLocation">
            <Settings />
        </div>
        {children}
    </PageWrapper>
}

export default Page;
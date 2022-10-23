import React, { ReactNode } from "react"

import Header from "../Header"
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
        <Header>
            {children}
        </Header>
    </PageWrapper>
}

export default Page;
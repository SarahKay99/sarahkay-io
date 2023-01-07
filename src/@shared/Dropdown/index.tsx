import React from "react"
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-empty-pattern */
import { DropdownWrapper } from "./index.style";

interface DropdownProps {
    width?: string
    height?: string
}

function Dropdown({
    width,
    height
}: DropdownProps) {
    return <DropdownWrapper width={width} height={height}>

    </DropdownWrapper>
}

export default Dropdown;
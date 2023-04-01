import { useSettings } from "../../@context/settings";
import React, { useState } from "react"
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-empty-pattern */
import { CheckboxWrapper } from "./index.style";

interface CheckboxProps {
    onClick: any
}

function Checkbox({}: CheckboxProps) {
    const {colorTheme} = useSettings();
    
    const [checked, setChecked] = useState<boolean>();
    
    return <CheckboxWrapper color={colorTheme.colorCode}>
    </CheckboxWrapper>
}

export default Checkbox;
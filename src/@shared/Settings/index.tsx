import React, { useEffect } from "react"

import { useTheme } from "@context/theme"

import { ColorButton, ColorOptionsWrapper, SettingsWrapper } from "./index.style"
import { colors } from "@context/_constants";
import { useTogglePopups } from "../../@context/togglePopups";

function Settings() {

    const { changeColorTheme } = useTheme();
    const { showingSettings } = useTogglePopups();

    useEffect(() => {
        console.log("showing settings");
        console.log(showingSettings);
    }, [showingSettings])

    return <SettingsWrapper showing={showingSettings}>
        <ColorOptionsWrapper>
            {colors.map(color => {
                return <ColorButton 
                    onClick={(e) => changeColorTheme(e, color)}
                    color={color} 
                />
            })}
        </ColorOptionsWrapper>
    </SettingsWrapper>
}

export default Settings;
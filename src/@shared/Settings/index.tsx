import React, { useEffect } from "react"

import { colors } from "../../@context/_constants";
import { useSettings } from "../../@context/settings";
import { useTogglePopups } from "../../@context/togglePopups";
import { ColorButton, ColorBox, ColorOptionsWrapper, SettingsWrapper, OptionsWrapper, ChangeColorWrapper } from "./index.style"
import Dropdown from "../Dropdown";
import Checkbox from "../Checkbox";

function Settings() {

    const { changeColorTheme, changeColorThemeWithSearch } = useSettings();
    const { showingSettings, showingColorDropdown, toggleShowingColorDropdown } = useTogglePopups();
    
    const handleSettings = (e: any) => {
        changeColorThemeWithSearch(e)
    }

    useEffect(() => {
        console.log("showing settings");
        console.log(showingSettings);
    }, [showingSettings])

    return <SettingsWrapper showing={showingSettings}>
        <OptionsWrapper>
            <h2>Settings</h2>

            <ColorOptionsWrapper>
                <ColorBox onClick={(e) => toggleShowingColorDropdown(e)} color={'#ED0F87'} />
                <span className="colorTheme">Color Theme</span>
            </ColorOptionsWrapper>
           
            <ChangeColorWrapper showing={showingColorDropdown}>
                <button className="x" onClick={(e) => toggleShowingColorDropdown(e)}>X</button>
                <div className="buttonsDisplay">   
                    {colors.map(color => {
                        return <ColorButton 
                            onClick={(e) => changeColorTheme(e, color.colorCode)}
                            color={color.colorCode} 
                        />
                    })}
                </div>
            </ChangeColorWrapper>

            

            <span className="font">Font</span>
            <Dropdown 

            />

            <span className="language">Language</span>
            <Dropdown 
            
            />

            <div className="checkboxWrapper">
                <Checkbox 
                    onClick={handleSettings}
                />
                <span>change color theme with search</span>
            </div>

        </OptionsWrapper>
    </SettingsWrapper>
}

export default Settings;
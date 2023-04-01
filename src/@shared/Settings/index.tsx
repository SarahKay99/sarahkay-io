import React, { useEffect } from "react"

import { colors } from "../../@context/_constants";
import { useSettings } from "../../@context/settings";
import { useTogglePopups } from "../../@context/togglePopups";
import { ColorButton, ColorBox, ColorOptionsWrapper, SettingsWrapper, OptionsWrapper, ChangeColorWrapper, MarginedDiv, CheckboxDivWrapper } from "./index.style"
import Dropdown from "../Dropdown";
import Checkbox from "../Checkbox";
import { Color } from "../../@context/_types";

function Settings() {

    const { changeColorTheme, changeColorThemeWithSearch } = useSettings();
    const { showingSettings, showingColorDropdown, toggleShowingColorDropdown } = useTogglePopups();
    
    const handleSettings = (e: any) => {
        changeColorThemeWithSearch(e)
    }

    return <SettingsWrapper showing={showingSettings}>
        <OptionsWrapper>
            <h2>settings</h2>

            <ColorOptionsWrapper>
                <ColorBox onClick={(e) => toggleShowingColorDropdown(e)} color={'#ED0F87'} />
                <span className="colorTheme">color theme</span>
            </ColorOptionsWrapper>
           
            {/** TODO: Turn into a full screen mask **/}
            <ChangeColorWrapper showing={showingColorDropdown}>
                <button className="x" onClick={(e) => toggleShowingColorDropdown(e)}>X</button>
                <div className="buttonsDisplay">   
                    {colors.map((color: Color, idx: number) => {
                        return <ColorButton 
                            key={idx.toString()}
                            onClick={(e) => changeColorTheme(e, color)}
                            color={color.colorCode} 
                        />
                    })}
                </div>
            </ChangeColorWrapper>

            <MarginedDiv margin={"3vh 0vh 0vh 0vh"}>
                <span className="font">Font</span>
                <Dropdown 

                />
            </MarginedDiv>

            <MarginedDiv margin={"3vh 0vh 0vh 0vh"}>
                <span className="language">Language</span>
                <Dropdown 
                
                />
            </MarginedDiv>

            <CheckboxDivWrapper margin={"3vh 0vh 0vh 0vh"}>
                <Checkbox 
                    onClick={handleSettings}
                />
                <span className="checkboxText">change color theme with search</span>
            </CheckboxDivWrapper>

        </OptionsWrapper>
    </SettingsWrapper>
}

export default Settings;
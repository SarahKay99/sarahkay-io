import React, { createContext, ReactElement, ReactNode, useContext, useState } from 'react'
import { Color, SettingsProviderValue } from './_types'

const SettingsContext = createContext({} as SettingsProviderValue)
  
function SettingsProvider({
    children
}: {
    children: ReactNode
}): ReactElement {

    const [colorTheme, setColorTheme] = useState<Color>({name: 'pink', colorCode: '#ED0F87'});
    const [chosenFont, setChosenFont] = useState<'Press Start 2P'>('Press Start 2P');
    const [chosenLanguage, setChosenLanguage] = useState<'ENG' | 'ESP' | 'POR'>('ENG');
    const [changeColorThemeWithSearchToggled, setChangeColorThemeWithSearch] = useState<boolean>(false);

    const changeColorTheme = (e: any, newColor: Color) => {
        e.preventDefault();
        setColorTheme(newColor);
    }

    const changeColorThemeWithSearch = (e: any, changeColorThemeWithSearch: string) => {
        e.preventDefault();
        setChangeColorThemeWithSearch(!changeColorThemeWithSearch);
    }

    const changeChosenFont = (e: any, newFont: 'Press Start 2P') => {
        e.preventDefault();
        setChosenFont(newFont)
    }

    const changeChosenLanguage = (e: any, newLanguage: 'ENG' | 'ESP' | 'POR') => {
        e.preventDefault();
        setChosenLanguage(newLanguage);
    }


    return (
        <SettingsContext.Provider
            value={
                {
                    colorTheme: colorTheme,
                    font: chosenFont,
                    language: chosenLanguage,
                    changeColorThemeWithSearchToggled: changeColorThemeWithSearchToggled,
                    changeColorTheme: changeColorTheme,
                    changeChosenFont: changeChosenFont,
                    changeChosenLanguage: changeChosenLanguage,
                    changeColorThemeWithSearch: changeColorThemeWithSearch
                } as SettingsProviderValue
            }
        >
            {children}
        </SettingsContext.Provider>
    )
}
  
// Helper hook to access the provider values
const useSettings = (): SettingsProviderValue =>
    useContext(SettingsContext)
  
export { SettingsProvider, useSettings, SettingsContext }
export default SettingsProvider
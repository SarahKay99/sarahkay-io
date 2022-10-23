import React, { createContext, ReactElement, ReactNode, useContext, useState } from 'react'

import { ThemeProviderValue } from './_types'

const ThemeContext = createContext({} as ThemeProviderValue)
  
function ThemeProvider({
    children
}: {
    children: ReactNode
}): ReactElement {

    const [colorTheme, setColorTheme] = useState('pink');

    const changeColorTheme = (e: any, newColor: string) => {
        e.preventDefault();
        setColorTheme(newColor);
    }

    return (
        <ThemeContext.Provider
            value={
                {
                    colorTheme: colorTheme,
                    changeColorTheme: changeColorTheme
                } as ThemeProviderValue
            }
        >
            {children}
        </ThemeContext.Provider>
    )
}
  
// Helper hook to access the provider values
const useTheme = (): ThemeProviderValue =>
    useContext(ThemeContext)
  
export { ThemeProvider, useTheme, ThemeContext }
export default ThemeProvider
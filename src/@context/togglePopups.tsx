import React, { createContext, ReactElement, ReactNode, useContext, useEffect, useState } from 'react'

import { TogglePopupsProviderValue } from './_types'

const TogglePopupsContext = createContext({} as TogglePopupsProviderValue)
  
function TogglePopupsProvider({
    children
}: {
    children: ReactNode
}): ReactElement {

    const [showingSettings, setShowingSettings] = useState(false);
    const [showingColorDropdown, setShowingColorDropdown] = useState(false);

    const toggleShowingSettings = (e: any) => {
        e.preventDefault();

        // close both dropdowns
        if (showingColorDropdown) setShowingColorDropdown(false);
        setShowingSettings(!showingSettings);
    }

    const toggleShowingColorDropdown = (e: any) => {
        e.preventDefault();
        setShowingColorDropdown(!showingColorDropdown);
    }

    useEffect(() => {
        console.log("SHOWING SETTINGS");
        console.log(showingSettings);
    }, [showingSettings])

    return (
        <TogglePopupsContext.Provider
            value={
                {
                    showingSettings: showingSettings,
                    showingColorDropdown: showingColorDropdown,
                    toggleShowingSettings: toggleShowingSettings,
                    toggleShowingColorDropdown: toggleShowingColorDropdown
                } as TogglePopupsProviderValue
            }
        >
            {children}
        </TogglePopupsContext.Provider>
    )
}
  
// Helper hook to access the provider values
const useTogglePopups = (): TogglePopupsProviderValue =>
    useContext(TogglePopupsContext)
  
export { TogglePopupsProvider, useTogglePopups, TogglePopupsContext }
export default TogglePopupsProvider
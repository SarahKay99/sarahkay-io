import React, { createContext, ReactElement, ReactNode, useContext, useEffect, useState } from 'react'

import { TogglePopupsProviderValue } from './_types'

const TogglePopupsContext = createContext({} as TogglePopupsProviderValue)
  
function TogglePopupsProvider({
    children
}: {
    children: ReactNode
}): ReactElement {

    const [showingSettings, setShowingSettings] = useState(false);

    const toggleShowingSettings = (e: any) => {
        e.preventDefault();
        setShowingSettings(!showingSettings);
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
                    toggleShowingSettings: toggleShowingSettings
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
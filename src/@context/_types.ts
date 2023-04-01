export interface TogglePopupsProviderValue {
    showingSettings: boolean
    showingColorDropdown: boolean
    toggleShowingSettings: any
    toggleShowingColorDropdown: any
}

export interface ThemeProviderValue {
    colorTheme: string
    changeColorTheme: any
}

export interface SettingsProviderValue {
    // variables
    colorTheme: Color
    font: 'Press Start 2P'
    language: 'ENG' | 'ESP' | 'POR',
    changeColorThemeWithSearchToggled: boolean

    // functions
    changeColorTheme: any
    changeChosenFont: any
    changeChosenLanguage: any
    changeColorThemeWithSearch: any
}

export interface Color {
    name: string
    colorCode: string
    emoji: string
    emojiUrl?: string
}
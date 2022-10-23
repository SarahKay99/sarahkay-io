import styled from "styled-components"

export const SettingsWrapper = styled.div<{showing: boolean}>`
    display: ${(props: any) => props.showing ? 'flex' : 'none'};
    background-color: darkgrey;
`

export const ColorButton = styled.div<{color: string}>`
    background-color: ${(props: any) => `${props.color}`};
    
    .hover {

    }
`

export const ColorOptionsWrapper = styled.div`

`
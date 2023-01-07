import styled from "styled-components"

export const SettingsWrapper = styled.div<{showing: boolean}>`
    display: ${(props: any) => props.showing ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;

    background-color: #343232;
    height: 50vh;
    width: 18vw;

    border-radius: 10px;
`

export const OptionsWrapper = styled.div`
    position: relative;
    color: white;
    font-size: 28px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .checkboxWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`


export const ColorOptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ChangeColorWrapper = styled.div<{showing: boolean}>`
    position: absolute;
    right: -27px;
    bottom: -10px;
    display: ${(props: any) => props.showing ? 'flex' : 'none'};
    flex-direction: column;

    background-color: #535353;
    border-radius: 10px;
    width: 18vw;
    height: 18vh;

    .x {
        border: none;
        background-color: transparent;
        height: min-content;
        width: min-content;
        padding: 10px;
        color: #ffffff5c;
        font-weight: 550;
    }
`

export const ColorBox = styled.button<{color: string}>`
    border: none;
    background-color: ${(props: any) => props.color};
    border-radius: 10px;
    width: 35%;
    height: 9vh;
`

export const ColorButton = styled.button<{color: string}>`
    background-color: ${(props: any) => props.color};
    border: none;
    border-radius: 5px;
    margin: 0.5em 0.5em 0.5em 0.5em;
    width: 4vh;
    height: 4vh;
    
    .hover {

    }
`
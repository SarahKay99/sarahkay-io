import styled from "styled-components"

export const SettingsWrapper = styled.div<{showing: boolean}>`
    display: ${(props: any) => props.showing ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;

    background-color: #343232;
    border-radius: 10px;
    padding: 0vh 0vh 3vh 0vh;

    min-width: fit-content;
    max-width: 18vw;
    text-align: center;

    h2 {
        margin: 2vh 0vh 2vh 0vh;
    }
`

export const OptionsWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;

    text-align: right;
    color: white;
    font-size: 28px;
`

export const CheckboxDivWrapper = styled.div<{margin: string}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: ${(props: any) => props.margin};

    .checkboxText {
        width: 90%;
        text-align: right;
        font-size: 16px;
    }
`

export const ColorOptionsWrapper = styled.div<{margin?: string}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;

    margin: ${(props: any) => props.margin ? props.margin : '0'};
`

export const MarginedDiv = styled.div<{margin?: string}>`
    text-align: center;
    margin: ${(props: any) => props.margin ? props.margin : '0'};

    .font {
        margin-bottom: 2px;
    }

    .language {
        margin-bottom: 2px;
    }
`

export const ChangeColorWrapper = styled.div<{
    showing: boolean
    margin?: string
}>`
    position: absolute;
    right: 27px;
    bottom: 100px;
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
        width: max-content;
        padding: 10px;
        color: #ffffff5c;
        font-weight: 550;
    }
`

export const ColorBox = styled.button<{color: string}>`
    border: none;
    background-color: ${(props: any) => props.color};
    border-radius: 10px;
    width: 50%;
    height: 11vh;
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
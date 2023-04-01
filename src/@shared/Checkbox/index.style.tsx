import styled from "styled-components"

export const CheckboxWrapper = styled.button<{color: string}>`
    display: flex;
    border-radius: 5px;
    border: none;
    height: 3vh;
    width: 3vh;

    background-color: ${(props: any) => props.color};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`
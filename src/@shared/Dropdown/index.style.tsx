import styled from "styled-components"

export const DropdownWrapper = styled.div<{width: string, height: string}>`
    background-color: #535353;
    border-radius: 10px;
    width: ${(props: any) => props.width ? props.width : '15vw'};
    height: ${(props: any) => props.height ? props.height : '5vh'};
`
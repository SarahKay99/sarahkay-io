import styled from "styled-components"

export const CarouselWrapper = styled.div<{
    border: string
    maxWidth: string
    maxHeight: string
}>`
    border: ${(props: any) => props.border};
`

export const CarouselContent = styled.div<{
    maxWidth: string
    maxHeight: string
}>`
    display: flex;

    .arrowButton {
        background-color: transparent;
        border: none;
    }

    img {
        max-width: ${(props: any) => props.maxWidth};
        max-height: ${(props: any) => props.maxHeight};
    }
`
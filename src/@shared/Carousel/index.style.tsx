import styled from "styled-components"

export const CarouselWrapper = styled.div<{
    border: string
}>`
    border: ${(props: any) => props.border};
`
import styled from "styled-components"

export const SocialMediaButtonsWrapper = styled.div<{
    size: string
    direction: 'vertical' | 'horizontal'
    margin?: string
}>`
    display: flex;
    flex-direction: ${(props: any) => 
        props.direction === 'vertical' ? 'column' 
        : props.direction === 'horizontal' && 'row'
    };
    width: fit-content;
    margin: ${(props: any) => props.margin ? props.margin : '0vw 0vw 0vw 0vw'};

    img {
        width: ${(props: any) => `${props.size}`};
        height: ${(props: any) => `${props.size}`};
    }

    a {
        width: fit-content;
    }
`
import styled from "styled-components"

export const Mask = styled.div`
    background-color: var(--mask-color);
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 8vh;


    .image {
        display: flex;
        flex-direction: center;
        justify-content: center;

        width: 25%;
        height: 100%;
        background: url('pink.png');
        background-position: center;
        background-size: cover;
    }

    .image a {
        /* font-family: Ready Player 2 */
        display: flex;
        align-items: center;

        font-size: 30px;
        font-weight: 600;
        color: white;
    }
`
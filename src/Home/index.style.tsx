import styled from "styled-components"

export const HomePageWrapper = styled.div`
    display: flex;
    padding: 4vw 6vw 4vw 6vw;
    color: var(--text-color);

    .mainText {

    }

    .links {
        display: flex;
        flex-direction: column;
        margin: 0vw 0vw 4vw 0vw;
    }

    .links a {
        color: var(--text-color);
        border: solid white 0px;
    }

    .links a:hover {
        color: var(--link-color);
    }

    .contactMe {
        color: var(--text-color);
        padding: 1vw 3vw 1vw 3vw;
        border: solid white 2px;
        margin: 2vw 1vw 2vw 1vw;
    }
`
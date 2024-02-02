import { css } from "styled-components";

const layout = css`
    width: 100%;
    display: flex;
    background-color: #ccc;
    & > :first-child{
        flex-shrink: 0;
        flex-basis: 30%;
        background-color: #bbb;
        height: 100vh;
    }
`;

export default layout;
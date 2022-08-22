import { createGlobalStyle, css } from 'styled-components';
import AlatsiRegular from '../assets/fonts/Alatsi-Regular.ttf';

export const GlobalStyle = createGlobalStyle`${css`
    @font-face {
        font-family: 'Alatsi';
        src: url(${AlatsiRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: auto;
    }

    * {
        font-family: 'Alatsi';
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
`}  
`;

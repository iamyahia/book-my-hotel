import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

    *{
        box-sizing:border-box;
        text-decoration:none
    }
    body {
        font-family: 'Inter', sans-serif;
        padding:0;
        margin:0;
        color: #243e63;

    }

`;

export default GlobalStyles;

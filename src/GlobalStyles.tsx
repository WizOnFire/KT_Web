import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    overflow-x: hidden;
  }
  @font-face {
    font-family: 'KBO_Gothic_bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/KBO-Dia-Gothic_bold.woff') format('woff');
    font-weight: 700;
  }

  @font-face {
    font-family: 'PartialSansKR';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/PartialSansKR-Regular.woff2') format('woff2');
  }

  body {
    font-family: Noto Sans KR, Malgun Gothic, sans-serif !important;
  }
`;

export default GlobalStyle;
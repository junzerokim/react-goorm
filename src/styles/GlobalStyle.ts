import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 700;
    font-style: normal;
    src: url('/fonts/NotoSansKR-Bold.otf') format('opentype'),
}

@font-face {
    font-family: 'Noto Sans KR';
    font-weight: 500;
    font-style: normal;
    src: url('/fonts/NotoSansKR-Medium.otf') format('opentype'),
}

@font-face {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    font-style: normal;
    src: url('/fonts/NotoSansKR-Regular.otf') format('opentype'),
}

@font-face {
    font-family: 'Noto Sans KR';
    font-weight: 300;
    font-style: normal;
    src: url('/fonts/NotoSansKR-Light.otf') format('opentype'),
}
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

import Kanit from 'src/fonts/kanit-v7-latin-regular.woff';
import Kanit2 from 'src/fonts/kanit-v7-latin-regular.woff2';

import MaduraiRegular from 'src/fonts/hind-madurai-v6-latin-regular.woff';
import MaduraiRegular2 from 'src/fonts/hind-madurai-v6-latin-regular.woff2';

import MaduraiBold from 'src/fonts/hind-madurai-v6-latin-500.woff';
import MaduraiBold2 from 'src/fonts/hind-madurai-v6-latin-500.woff2';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: ${(props) => props.theme.global.bgColor};
  }

  @font-face {
    font-family: 'Kanit';
    src: local('Kanit'), local('Kanit'),
    url(${Kanit2}) format('woff2'),
    url(${Kanit}) format('woff');
    font-style: normal;
  }

  /* hind-madurai-regular - latin */
  @font-face {
    font-family: 'Hind Madurai 400';
    font-style: normal;
    font-weight: 400;
    src: local('Hind Madurai 400'),
    url(${MaduraiRegular}) format('woff'),
    url(${MaduraiRegular2}) format('woff2');
  }

  /* hind-madurai-500 - latin */
  @font-face {
    font-family: 'Hind Madurai 500';
    font-style: normal;
    font-weight: 500;
    src: local('Hind Madurai 500'),
    url(${MaduraiBold}) format('woff'),
    url(${MaduraiBold2}) format('woff2');
  }
`;

export default GlobalStyle;

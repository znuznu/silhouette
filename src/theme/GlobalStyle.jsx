import { createGlobalStyle } from 'styled-components';

import Kanit from 'src/fonts/kanit-v7-latin-regular.woff';
import Kanit2 from 'src/fonts/kanit-v7-latin-regular.woff2';

import MaduraiRegular from 'src/fonts/hind-madurai-v6-latin-regular.woff';
import MaduraiRegular2 from 'src/fonts/hind-madurai-v6-latin-regular.woff2';

import MaduraiBold from 'src/fonts/hind-madurai-v6-latin-500.woff';
import MaduraiBold2 from 'src/fonts/hind-madurai-v6-latin-500.woff2';

import CabinRegular from 'src/fonts/cabin-v17-latin-regular.woff';
import CabinRegular2 from 'src/fonts/cabin-v17-latin-regular.woff2';

import CabinBold from 'src/fonts/cabin-v17-latin-700.woff';
import CabinBold2 from 'src/fonts/cabin-v17-latin-700.woff2';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${(props) => props.theme.global.bg}; 
  }

  ::selection{
    background-color : ${(props) => props.theme.global.primary};
    color : ${(props) => props.theme.global.secondary}
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

  /* cabin-regular - latin */
  @font-face {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    src: local('Cabin Regular'),
      url(${CabinRegular}) format('woff'),
      url(${CabinRegular2}) format('woff2');
  }

  /* cabin-700 - latin */
  @font-face {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 700;
    src: local('Cabin 700'),
    url(${CabinBold}) format('woff'),
    url(${CabinBold2}) format('woff2');
  }
`;

export default GlobalStyle;

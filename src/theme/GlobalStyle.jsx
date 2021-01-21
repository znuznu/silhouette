import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.container.backgroundColor};
  }
`;

export default GlobalStyle;

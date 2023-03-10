import { createGlobalStyle } from 'styled-components';

import { colors, ColorsProps } from "./colors"

export const theme = {
  colors: colors
}

interface ThemeType {
  colors: ColorsProps
}
 
const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.gray};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;
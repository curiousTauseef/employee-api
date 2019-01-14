import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
      box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${props => props.theme.black};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.greyBg};
  }

  h1,
  p {
      margin: 0 0 0.5em 0;
  }

  h2 {
    color: ${props => props.theme.blue};
    margin: 0 0 0.5em 0;
    font-size: 1.125rem;
  }
`
export default GlobalStyle

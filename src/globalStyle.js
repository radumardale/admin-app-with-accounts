import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import font from './fontFace';

// @import url(${p => p.theme.typo.importFont});
const GlobalStyle = createGlobalStyle`
  ${font};
  ${reset};
  html, .root {
  font-size: 14px;
  line-height: 21px;
}
  body {
    color: white;
    margin: 0;
    padding: 0;

    font-family:'Futura Md BT Medium';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 1rem;
    line-height: 1.5rem;

  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }


h1, .h1 {
  font-size: 2.2142857rem;
  line-height: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
}
h2, .h2 {
  font-size: 1.7142857rem;
  line-height: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
h3, .h3 {
  font-size: 1.2857143rem;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
h4, .h4 {
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
h5, .h5 {
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}

`;

export default GlobalStyle;

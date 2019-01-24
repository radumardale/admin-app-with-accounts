import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import font from './fontFace';

// @import url(${p => p.theme.typo.importFont});
const GlobalStyle = createGlobalStyle`
  ${font};
  ${reset};
  html, .root {
    font-size: 16px;
    line-height: 24px;
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
  font-size: 2.1875rem;
  line-height: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
}
h2, .h2 {
  font-size: 1.6875rem;
  line-height: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
h3, .h3 {
  font-size: 1.3125rem;
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
p, ul, ol, pre, table, blockquote {
  margin-top: 0rem;
  margin-bottom: 1.5rem;
}
ul ul, ol ol, ul ol, ol ul {
  margin-top: 0rem;
  margin-bottom: 0rem;
}

/* Let's make sure all's aligned */
hr, .hr {
  border: 1px solid;
  margin: -1px 0;
}

p, ul, ol, pre, table, blockquote {
  margin-top: 0rem;
  margin-bottom: 1.5rem;
}


`;

export default GlobalStyle;

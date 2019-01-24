import React from "react";
import GlobalStyle from "../globalStyle";

import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Home />
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

export default App;

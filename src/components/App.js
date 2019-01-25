import React from 'react';
import GlobalStyle from '../globalStyle';

import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import NotFound from './NotFound';

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/recover-password" exact component={ResetPassword} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
          <GlobalStyle />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

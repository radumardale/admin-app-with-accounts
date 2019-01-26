import React from 'react';
import ReactDOM from 'react-dom';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import EntryPoint from './EntryPoint';
import './icons';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <EntryPoint />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

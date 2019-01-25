import React from 'react';
import ReactDOM from 'react-dom';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import './icons';

function EntryPoint() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<EntryPoint />, rootElement);

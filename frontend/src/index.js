import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.css';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './theme/extendTheme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
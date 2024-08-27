/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './store.js';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/react';

const GlobalStyles = css`
  html {
    font-size: 1rem;
    font-family: 'Inter, sans-serif';
    font-weight: 400;
    line-height: 1.57;
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={GlobalStyles} />
      <App />
    </Provider>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ExampleProvider from './context/Example'

function Root() {
  return (
    <ExampleProvider initialValue={0}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ExampleProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

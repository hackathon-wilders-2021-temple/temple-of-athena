import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter'
import './index.css';
import App from './App';


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter basename="https://hackathon-wilders-2021-temple.github.io/temple-of-athena">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);



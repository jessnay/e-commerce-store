import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './AppRoutes';
import './Styles/Style.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


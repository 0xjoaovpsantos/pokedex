//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import { Routes } from './routes/Routes';
import { GlobalStyle } from './styles/GlobalStyle';

//Custom CSS
import './styles/antd-custom.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);

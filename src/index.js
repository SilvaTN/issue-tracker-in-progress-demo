import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { pink, amber } from '@material-ui/core/colors';

const myTheme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: amber,
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={myTheme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import style from './index.css';
import App from './App';
import debugApp from './debugApp'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <debugApp />
  </React.StrictMode>
);

console.log('fuck1ff2fffgggfffff3')
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

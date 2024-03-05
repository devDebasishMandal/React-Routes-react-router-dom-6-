import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from "react-dom";
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // this app.js will be able to acess the functionality of the browser router(parent)
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



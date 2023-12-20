import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import TodoList from './component/TodoList';
import reportWebVitals from './reportWebVitals';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();

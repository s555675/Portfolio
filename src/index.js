import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Inicio from './pages/inicio/index.jsx';
import Sobre from './pages/sobre';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sobre />
  </React.StrictMode>
);

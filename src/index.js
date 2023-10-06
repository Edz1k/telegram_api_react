import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primeicons/primeicons.css'
import App from './App';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <PrimeReactProvider>
        <PrimeReactContext.Consumer>
          {()=><App/>}
        </PrimeReactContext.Consumer>
      </PrimeReactProvider>
    </React.StrictMode>
  </BrowserRouter>
);


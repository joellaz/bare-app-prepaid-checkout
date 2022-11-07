import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import BareAppPrepaidCheckout from './BareAppPrepaidCheckout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BareAppPrepaidCheckout />
  </React.StrictMode>
);

reportWebVitals();

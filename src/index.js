// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { messaging } from './firebaseConfig';
import { onMessage } from 'firebase/messaging';

// Initialize Firebase messaging listener
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // Customize notification here
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();

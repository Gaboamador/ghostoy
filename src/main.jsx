import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ProgressProvider } from './context/ProgressContext';
import './styles/globals.scss';

if (import.meta.env.DEV && 'serviceWorker' in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => registrations.forEach((registration) => registration.unregister()));

  if ('caches' in window) {
    caches.keys().then((keys) => keys.forEach((key) => caches.delete(key)));
  }
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProgressProvider>
        <App />
      </ProgressProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

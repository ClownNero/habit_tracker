import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleHabit />
  </React.StrictMode>
);


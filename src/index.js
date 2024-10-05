import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import JobContextProvider from './context.jsx/jobContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <JobContextProvider>
        <App />
      </JobContextProvider>
    </HashRouter>
  </React.StrictMode>
);

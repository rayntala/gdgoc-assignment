// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import '@fontsource-variable/google-sans-flex'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
      <App />
  </React.StrictMode>,
)
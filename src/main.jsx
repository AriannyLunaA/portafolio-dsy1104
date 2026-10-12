import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Estilos personalizados (debe ir después para que sobreescriba a Bootstrap)
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
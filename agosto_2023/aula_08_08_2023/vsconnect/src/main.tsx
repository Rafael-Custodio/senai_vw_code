import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import Home from './pages/Home'
import ListaDevs from './pages/ListaDevs'
import ListaServicos from './pages/ListaServicos'
// import ListaServicos from './pages/ListaServicos'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <ListaDevs/> */}
    <ListaServicos/>

  </React.StrictMode>,
)




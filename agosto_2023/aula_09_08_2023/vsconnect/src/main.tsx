import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/Footer'
import Header from './components/Header'
// import App from './App'
import './index.css'
import Home from './pages/Home'
import ListaDevs from './pages/ListaDevs'
import ListaServicos from './pages/ListaServicos'
// import ListaServicos from './pages/ListaServicos'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
    {/* <ListaDevs/> */}
    {/* <ListaServicos/> */}

  </React.StrictMode>,
)




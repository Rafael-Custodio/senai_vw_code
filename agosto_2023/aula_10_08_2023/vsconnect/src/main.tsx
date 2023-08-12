import React from 'react'
import ReactDOM from 'react-dom/client'
import{Route, Routes, BrowserRouter} from "react-router-dom"
// import App from './App'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ListaDevs from './pages/ListaDevs'
import ListaServicos from './pages/ListaServicos'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='lista_devs' element={<ListaDevs/>} />
      <Route path='lista_servicos' element={<ListaServicos/>} />
    </Routes>
    <Footer />

    </BrowserRouter>
  </React.StrictMode>,
)




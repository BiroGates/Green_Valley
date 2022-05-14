// Necessary imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Landying Page
import LandyingPage from './pages/ladyingPage'

import LoginPage from './pages/login/index'

import Menu from './pages/menuPage'

import PaginaAdmCardapio from './pages/admPage/AdmPage_Cardapio'
import PaginaAdmAddProdutos from './pages/admPage/AdmPage_AddProdutos'
import PaginaAdmHome from './pages/admPage/AdmPage'


export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LandyingPage />}></Route>
            <Route exact path="/login" element={<LoginPage />}></Route>
            <Route  exact path="/menu" element={<Menu />}></Route>
            <Route  exact path="/admpagehome" element={<PaginaAdmHome />}></Route>
            <Route  exact path="/admpagecardapio" element={<PaginaAdmCardapio />}></Route>
            <Route  exact path="/admpageadd" element={<PaginaAdmAddProdutos />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

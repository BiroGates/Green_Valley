// Necessary imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Landying Page
import LandyingPage from './pages/user/ladyingPage'
import Menu from './pages/user/menuPage'

// Admin
import Home from './pages/admin/home'
import Cardapio from './pages/admin/cardapio'
import Adicionar from './pages/admin/adicionar'

import LoginPage from './pages/login/index'




export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LandyingPage />}></Route>
            <Route exact path="/login" element={<LoginPage />}></Route>
            <Route  exact path="/menu" element={<Menu />}></Route>
            <Route  exact path="/admin" element={<Home />}></Route>
            <Route  exact path="/admin/cardapio" element={<Cardapio />}></Route>
            <Route  exact path="/admin/adicionar" element={<Adicionar />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

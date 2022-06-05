// Necessary imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Landying Page
import LandyingPage from './pages/landiyng'

import LoginPage from './pages/login/index'
import Cardapio from './pages/cardapio'
import AdminPage from './pages/home'
import Menu from './pages/menu'


export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LandyingPage />}></Route>
            <Route exact path="/login" element={<LoginPage />}></Route>
            <Route  exact path="/cardapio" element={<Cardapio />}></Route>
            <Route  exact path="/admin" element={<AdminPage />}></Route>
            <Route  exact path="/admin/menu" element={<Menu />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

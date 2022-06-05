// Necessary imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Landying Page
import LandyingPage from './pages/ladyingPage'
import Menu from './pages/menuPage'

// Admin
import Home from './pages/admin/home'

import LoginPage from './pages/login/index'




export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LandyingPage />}></Route>
            <Route exact path="/login" element={<LoginPage />}></Route>
            <Route  exact path="/menu" element={<Menu />}></Route>
            <Route  exact path="/admin" element={<Home />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

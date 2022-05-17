// Necessary imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Landying Page
import LandyingPage from './pages/ladyingPage'

import LoginPage from './pages/login/index'
import Menu from './pages/menuPage'
import AdminPage from './pages/adminPage'


export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LandyingPage />}></Route>
            <Route exact path="/login" element={<LoginPage />}></Route>
            <Route  exact path="/menu" element={<Menu />}></Route>
            <Route  exact path="/adm" element={<AdminPage />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

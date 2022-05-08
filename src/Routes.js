// Necessary imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Landying Page
import LandyingPage from './pages/ladyingPage'
import Menu from './pages/menuPage'


export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LandyingPage />}></Route>
            <Route  exact path="/menu" element={<Menu />}></Route>

        </Routes>
    </BrowserRouter>
  )
}

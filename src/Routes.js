// Necessary imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Landying Page
import LandyingPage from './pages/ladyingPage'


export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<LandyingPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

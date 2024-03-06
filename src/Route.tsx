import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { CountryPage } from './pages/CountryPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country-page/:country" element={<CountryPage />} />
    </Routes>
  )
}

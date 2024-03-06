import { BrowserRouter } from 'react-router-dom'
import { CountryContextProvider } from './context/countryContext'
import { Router } from './Route'

export function App() {
  return (
    <CountryContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CountryContextProvider>
  )
}

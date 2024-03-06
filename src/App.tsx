import { CountryContextProvider } from './context/countryContext'
import { Home } from './pages/Home'

export function App() {
  return (
    <CountryContextProvider>
      <Home />
    </CountryContextProvider>
  )
}

import { BrowserRouter } from 'react-router-dom'
import { CountryContextProvider } from './context/countryContext'
import { Router } from './Route'

export function App() {
  return (
    // faz com que seja possível acessar os dados do contexto
    <CountryContextProvider>
      {/* faz com que seja possível alterar a rota */}
      <BrowserRouter>
        {/* faz com que seja possível renderizar as rotas, iniciando pela Home */}
        <Router />
      </BrowserRouter>
    </CountryContextProvider>
  )
}

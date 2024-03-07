import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/api'

// define a tipagem vinda da api
export interface CountryData {
  name: {
    common: string
    official: string
  }
  continents: string[]
  area: number
  population: number
  flags: {
    png: string
  }
  languages: {
    [key: string]: string
  }
  capital: string[]
  currencies: {
    [key: string]: {
      name: string
    }
  }
}

// define a tipagem dos dados do contexto
interface CountryContextType {
  countries: CountryData[] // dados dos países
  fetchCountry: (name: string | undefined) => void // função para buscar um país
  countryDetails: CountryData[] // dados do país, esta como um array pois o dado vem como um array de um item
  loading: boolean // carregamento dos dados
}

// criar um contexto, definindo seu tipo
const CountryContext = createContext({} as CountryContextType)

// provider do contexto que ira envolver os itens do arquivo App.tsx
export function CountryContextProvider({ children }: { children: ReactNode }) {
  const [countries, setCountries] = useState<CountryData[]>([]) // dados dos países
  const [countryDetails, setCountryDetails] = useState<CountryData[]>([]) // dados do país
  const [loading, setLoading] = useState(true) // carregamento dos dados

  // função para buscar os dados da api
  function fetchCountries() {
    api
      .get('/v3.1/all')
      .then((response) => {
        setCountries(response.data) // armazena os dados dentro do estado
        setLoading(false) //  carregamento foi alterado para false, o carregamento de países terminou
      })
      .catch(() => alert('Erro ao carregar os países')) // alerta caso ocorra um erro na busca
  }

  // função para buscar os dados de um país
  function fetchCountry(name: string | undefined) {
    setLoading(true) // altera o estado de carregamento para true, pois o mesmo ja estava como false após o primeiro carregamento
    api
      .get(`/v3.1/name/${name}?fullText=true`)
      .then((response) => {
        setCountryDetails(response.data) // armazena os dados dentro do estado
        setLoading(false) // carregamento foi alterado para false, o carregamento de países terminou
      })
      .catch(() => alert('Erro ao carregar o país'))
  }

  // executa a função para buscar os dados de todos os países assim que a aplicação for iniciada
  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    // passa os dados para o contexto, feito dessa forma para focalizar quais dados o contexto irá fornecer em um arquivo só
    <CountryContext.Provider
      value={{ countries, loading, fetchCountry, countryDetails }}
    >
      {children}
    </CountryContext.Provider>
  )
}

// hook para pegar os dados do contexto
export const useCountry = () => useContext(CountryContext)

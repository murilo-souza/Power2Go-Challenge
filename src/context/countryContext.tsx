import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/api'

export interface CountriesData {
  name: {
    common: string
  }
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

interface CountryContextType {
  countries: CountriesData[]
  loading: boolean
}

const CountryContext = createContext({} as CountryContextType)

export function CountryContextProvider({ children }: { children: ReactNode }) {
  const [countries, setCountries] = useState<CountriesData[]>([])
  const [loading, setLoading] = useState(true)

  function fetchCountries() {
    api.get('/v3.1/all').then((response) => {
      setCountries(response.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <CountryContext.Provider value={{ countries, loading }}>
      {children}
    </CountryContext.Provider>
  )
}

export const useCountry = () => useContext(CountryContext)

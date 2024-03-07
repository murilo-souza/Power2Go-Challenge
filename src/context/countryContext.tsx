import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/api'

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

interface CountryContextType {
  countries: CountryData[]
  fetchCountry: (name: string | undefined) => void
  countryDetails: CountryData[]
  loading: boolean
}

const CountryContext = createContext({} as CountryContextType)

export function CountryContextProvider({ children }: { children: ReactNode }) {
  const [countries, setCountries] = useState<CountryData[]>([])
  const [countryDetails, setCountryDetails] = useState<CountryData[]>([])
  const [loading, setLoading] = useState(true)

  function fetchCountries() {
    api.get('/v3.1/all').then((response) => {
      setCountries(response.data)
      setLoading(false)
    })
  }

  function fetchCountry(name: string | undefined) {
    setLoading(true)
    api.get(`/v3.1/name/${name}?fullText=true`).then((response) => {
      setCountryDetails(response.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <CountryContext.Provider
      value={{ countries, loading, fetchCountry, countryDetails }}
    >
      {children}
    </CountryContext.Provider>
  )
}

export const useCountry = () => useContext(CountryContext)

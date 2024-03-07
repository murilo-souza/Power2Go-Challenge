import { Input } from '../components/Input'
import BgHero from '../assets/hero-image-wr.jpg'
import { HeaderTable } from '../components/Table/HeaderTable'
import { ContentTable } from '../components/Table/ContentTable'
import { OrganizerWrapper } from '../components/Organizer/OrganizerWrapper'
import { OrganizerSelect } from '../components/Organizer/OrganizerSelect'
import { useCountry } from '../context/countryContext'
import { FormEvent, useState } from 'react'
import { CardCountry } from '../components/CardCountry'
import Papa from 'papaparse'
import { SkeletonHome } from '../components/Loader/SkeletonHome'

export function Home() {
  // hook para buscar os dados com o contexto
  const { countries, loading } = useCountry()

  // estado para armazenar o campo de busca
  const [search, setSearch] = useState('')

  // estado para armazenar o historico de busca, puxando os dados do localStorage caso haja dados
  const [historySearch, setHistorySearch] = useState<string[]>(() => {
    const historyOnStorage = localStorage.getItem('history')

    if (historyOnStorage) {
      return JSON.parse(historyOnStorage)
    }

    return []
  })

  // filtra os dados de acordo com o campo de busca para depois exportar em csv

  // define o tipo de vizualização tabela ou cartão
  const [viewType, setViewType] = useState<string>('table')

  // função para executar a busca
  function handleSearch(event: FormEvent) {
    // Previne o redirecionamento padrão do formulário
    event.preventDefault()

    // adiciona ao histórico apenas se o campo de busca tiver algo
    if (search !== '') {
      addToHistory(search)
      executeSearch(search)
    }
  }

  // adiciona novos itens ao histórico de busca
  function addToHistory(query: string) {
    const history = [query, ...historySearch]

    setHistorySearch(history)

    localStorage.setItem('history', JSON.stringify(history))
  }

  // função para executar a busca de acordo com o histórico de busca
  function executeSearch(query: string) {
    setSearch(query)
  }

  // função para exportar os dados para o CSV
  function exportToCSV() {
    // filtra os dados de acordo com o campo de busca para depois exportar em csv
    const searchData = countries.filter((item) => {
      return item.name.common.toLowerCase().includes(search.toLowerCase())
    })

    // filtra os dados vindos da api para depois exportar em csv
    const dataToExport = searchData.map((item) => ({
      name: item.name.common,
      officialName: item.name.official,
      capital: item.capital !== undefined && item.capital[0],
      population: item.population,
      area: item.area,
      flag: item.flags.png,
      languages:
        item.languages !== undefined &&
        Object.values(item.languages).join(', '),
      currencies:
        item.currencies !== undefined &&
        Object.values(item.currencies)
          .map((currency) => currency.name)
          .join(', '),
    }))

    const csv = Papa.unparse(dataToExport)

    const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const csvURL = window.URL.createObjectURL(csvData)
    const tempLink = document.createElement('a')
    tempLink.href = csvURL
    tempLink.setAttribute('download', 'data.csv')
    tempLink.click()
  }
  return (
    <>
      <div className="w-full h-[30rem] lg:h-[40vh]">
        <img
          className="w-full h-full object-cover relative -z-10"
          src={BgHero}
          alt=""
        />
      </div>
      <main className="max-w-7xl lg:min-h-[85vh] lg:max-h-[85vh] px-4 py-10 lg:-mt-20 -mt-40 mx-auto mb-8 bg-zinc-800 rounded-lg">
        <header className="lg:flex lg:items-center lg:justify-between mb-8">
          <span className="font-semibold text-zinc-400 text-xl">
            {/* define a quantidade de países de acordo com a busca */}
            {
              countries.filter((item) =>
                item.name.common.toLowerCase().includes(search.toLowerCase()),
              ).length
            }{' '}
            países encontrados
          </span>

          <form
            onSubmit={handleSearch}
            className="flex items-center gap-4 mt-8 lg:mt-0"
          >
            <Input
              placeholder="Pesquise um país pelo nome"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              disabled={loading}
            />
            <button
              type="submit"
              className="lg:p-3 p-2 bg-zinc-900 rounded-lg disabled:opacity-50"
              disabled={loading}
            >
              Salvar pesquisa
            </button>
          </form>
        </header>
        <div className="lg:grid lg:grid-cols-table flex flex-col gap-8">
          <section className="lg:border-r-2 lg:border-zinc-700 lg:pr-4">
            <OrganizerWrapper title="Organizada por">
              <OrganizerSelect
                value={viewType}
                onChange={(e) => setViewType(e.target.value)}
                disabled={loading}
              />
            </OrganizerWrapper>
            {historySearch.length > 0 && (
              <OrganizerWrapper title="Últimas pesquisas">
                <ul>
                  {historySearch.slice(0, 5).map((query, index) => (
                    <li key={index}>
                      <button onClick={() => executeSearch(query)}>
                        {query}
                      </button>
                    </li>
                  ))}
                </ul>
              </OrganizerWrapper>
            )}
            <OrganizerWrapper title="Exportar dados">
              <button
                className="p-4 bg-zinc-900 rounded-lg text-sm disabled:opacity-50"
                disabled={loading}
                onClick={exportToCSV}
              >
                Exportar dados dados da pesquisa
              </button>
            </OrganizerWrapper>
          </section>
          <section className="min-h-[65vh] max-h-[65vh] overflow-y-auto">
            {/* define o tipo de vizualização tabela ou cartão de acordo como viewType */}
            {viewType === 'table' ? (
              <HeaderTable>
                {/* define o carregamento dos dados */}
                {loading ? (
                  <>
                    <SkeletonHome />
                    <SkeletonHome />
                    <SkeletonHome />
                    <SkeletonHome />
                    <SkeletonHome />
                    <SkeletonHome />
                  </>
                ) : (
                  <>
                    {countries
                      .filter((item) =>
                        item.name.common
                          .toLowerCase()
                          .includes(search.toLowerCase()),
                      )
                      .map((item) => (
                        <ContentTable data={item} key={item.name.common} />
                      ))}
                  </>
                )}
              </HeaderTable>
            ) : (
              <div className="grid lg:grid-cols-3 lg:gap-2 gap-7 grid-cols-1">
                {countries
                  .filter((item) =>
                    item.name.common
                      .toLowerCase()
                      .includes(search.toLowerCase()),
                  )
                  .map((item) => (
                    <CardCountry data={item} key={item.name.common} />
                  ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  )
}

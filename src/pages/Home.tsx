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
  const { countries, loading } = useCountry()
  const [search, setSearch] = useState('')
  const [historySearch, setHistorySearch] = useState<string[]>(() => {
    const historyOnStorage = localStorage.getItem('history')

    if (historyOnStorage) {
      return JSON.parse(historyOnStorage)
    }

    return []
  })

  const [viewType, setViewType] = useState<string>('table')

  function handleSearch(event: FormEvent) {
    event.preventDefault()

    if (search !== '') {
      addToHistory(search)
      executeSearch(search)
    }
  }

  function addToHistory(query: string) {
    const history = [query, ...historySearch]

    setHistorySearch(history)

    localStorage.setItem('history', JSON.stringify(history))
  }

  function executeSearch(query: string) {
    setSearch(query)
  }

  function exportToCSV(data: unknown[]) {
    const csv = Papa.unparse(data)

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
            />
            <button type="submit" className="p-3 bg-zinc-900 rounded-lg">
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
                className="p-3 bg-zinc-900 rounded-lg"
                onClick={() => exportToCSV(countries)}
              >
                Exportar dados em CSV
              </button>
            </OrganizerWrapper>
          </section>
          <section className="min-h-[65vh] max-h-[65vh] overflow-y-auto">
            {viewType === 'table' ? (
              <HeaderTable>
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

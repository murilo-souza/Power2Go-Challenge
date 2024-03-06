import { Input } from '../components/Input'
import BgHero from '../assets/hero-image-wr.jpg'
import Logo from '../assets/Logo.svg'
import { HeaderTable } from '../components/Table/HeaderTable'
import { ContentTable } from '../components/Table/ContentTable'
import { OrganizerWrapper } from '../components/Organizer/OrganizerWrapper'
import { OrganizerSelect } from '../components/Organizer/OrganizerSelect'
import { CountriesData, useCountry } from '../context/countryContext'
import { useState } from 'react'
import { CardCountry } from '../components/CardCountry'

export function Home() {
  const { countries, loading } = useCountry()
  const [search, setSearch] = useState('')
  const [viewType, setViewType] = useState<'table' | 'card'>('table')

  function handleSearch(data: CountriesData[]) {
    if (search !== '') {
      const dataFiltered = data.filter((item) =>
        item.name.common.toLowerCase().includes(search.toLowerCase()),
      )

      return dataFiltered
    }

    return data
  }

  return (
    <>
      <div className="w-full">
        {/* <img
          className="absolute top-[20%] left-[50%] translate-x-[-50%]"
          src={Logo}
          alt=""
        /> */}
        <img className="w-full relative -z-10" src={BgHero} alt="" />
      </div>
      <main className="max-w-7xl min-h-[85vh] max-h-[85vh] px-4 py-10 -mt-20 mx-auto mb-8 bg-zinc-800 rounded-lg">
        <header className="flex items-center justify-between mb-8">
          <span className="font-semibold text-zinc-400 text-xl">
            {handleSearch(countries).length} países encontrados
          </span>
          <Input
            placeholder="Pesquise um país pelo nome"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </header>
        <div className="grid grid-cols-table gap-8">
          <section className="border-r-2 border-zinc-700 pr-4">
            <OrganizerWrapper title="Organizada por">
              <OrganizerSelect
                value={viewType}
                onChange={(e) => setViewType(e.target.value)}
              />
            </OrganizerWrapper>
          </section>
          <section className="overflow-y-auto min-h-[65vh] max-h-[65vh]">
            {viewType === 'table' ? (
              <HeaderTable>
                {loading ? (
                  <p>Carregando...</p>
                ) : (
                  <>
                    {handleSearch(countries).map((item) => (
                      <ContentTable data={item} key={item.name.common} />
                    ))}
                  </>
                )}
              </HeaderTable>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {handleSearch(countries).map((item) => (
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

import { Input } from '../components/Input'
import BgHero from '../assets/hero-image-wr.jpg'
import Logo from '../assets/Logo.svg'
import { HeaderTable } from '../components/Table/HeaderTable'
import { ContentTable } from '../components/Table/ContentTable'
import { OrganizerWrapper } from '../components/Organizer/OrganizerWrapper'
import { OrganizerSelect } from '../components/Organizer/OrganizerSelect'

export function Home() {
  return (
    <>
      <div className="w-full">
        <img
          className="absolute top-[20%] left-[50%] translate-x-[-50%]"
          src={Logo}
          alt=""
        />
        <img className="w-full relative -z-10" src={BgHero} alt="" />
      </div>
      <main className="max-w-6xl px-4 py-10 -mt-20 mx-auto mb-8 bg-zinc-800 rounded-lg">
        <header className="flex items-center justify-between mb-8">
          <span className="font-semibold text-zinc-400 text-xl">
            300 países encontrados
          </span>
          <Input placeholder="Pesquise um país pelo nome" />
        </header>
        <div className="grid grid-cols-table gap-8">
          <section>
            <OrganizerWrapper title="Organizada por">
              <OrganizerSelect />
            </OrganizerWrapper>
          </section>
          <section>
            <HeaderTable>
              <ContentTable />
              <ContentTable />
              <ContentTable />
              <ContentTable />
              <ContentTable />
              <ContentTable />
              <ContentTable />
              <ContentTable />
              <ContentTable />
              <ContentTable />
              <ContentTable />
              <ContentTable />
              <ContentTable />
              <ContentTable />
              <ContentTable />
            </HeaderTable>
          </section>
        </div>
      </main>
    </>
  )
}

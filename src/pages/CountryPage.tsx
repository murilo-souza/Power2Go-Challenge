import { useEffect } from 'react'
import BgHero from '../assets/hero-image-wr.jpg'
import { useCountry } from '../context/countryContext'
import { NavLink, useParams } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { InfoContent } from '../components/InfoContent'
import { ChevronLeft } from 'lucide-react'
import { SkeletonCountryPage } from '../components/Loader/SkeletonCountryPage'

export function CountryPage() {
  const { country } = useParams() // pega o nome do país informado na rota
  const { countryDetails, fetchCountry, loading } = useCountry() // pega os dados do contexto

  // faz o fetch dos dados conforme o país informado pelo useParams
  useEffect(() => {
    fetchCountry(country)
  }, [country])

  return (
    <>
      <div className="w-full h-[30rem] lg:h-[40vh]">
        <img
          className="w-full h-full object-cover relative -z-10"
          src={BgHero}
          alt=""
        />
      </div>
      <main className="max-w-3xl px-4 py-10 lg:-mt-20 -mt-40 lg:mx-auto mb-8 bg-zinc-800 rounded-lg mx-5 ">
        <NavLink
          to="/"
          className="lg:flex lg:items-center lg:gap-2 hidden hover:underline"
        >
          <ChevronLeft />
          Voltar
        </NavLink>

        {loading ? (
          <>
            <SkeletonCountryPage />
          </>
        ) : (
          <div className="flex flex-col items-center">
            <div className="w-72 h-[11rem] rounded-xl overflow-hidden -mt-24">
              <img
                src={countryDetails[0]?.flags.png}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:flex flex-col lg:flex-row items-center lg:gap-8 my-8">
              <Badge title="Population" value={countryDetails[0]?.population} />
              <Badge title="Area (km²)" value={countryDetails[0]?.area} />
            </div>

            <div className="w-full divide-y divide-zinc-700">
              <InfoContent title="Nome">
                <span>{countryDetails[0]?.name.common}</span>
              </InfoContent>
              <InfoContent title="Nome inteiro">
                <span>{countryDetails[0]?.name.official}</span>
              </InfoContent>
              <InfoContent title="Capital">
                {countryDetails[0]?.capital.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </InfoContent>
              <InfoContent title="Idiomas">
                <div>
                  {/* Faz a validação se o item é undefined */}
                  {countryDetails[0]?.languages !== undefined &&
                    Object.values(countryDetails[0]?.languages).map(
                      (item, index, array) => (
                        <span key={item}>
                          {item}
                          {index !== array.length - 1 && ', '}
                        </span>
                      ),
                    )}
                </div>
              </InfoContent>
              <InfoContent title="Moedas">
                <div>
                  {/* Faz a validação se o item é undefined */}
                  {countryDetails[0]?.currencies !== undefined &&
                    Object.values(countryDetails[0]?.currencies).map(
                      (item, index, array) => (
                        <span key={item.name}>
                          {item.name}
                          {index !== array.length - 1 && ', '}
                        </span>
                      ),
                    )}
                </div>
              </InfoContent>
              <InfoContent title="Continente">
                <div>
                  {countryDetails[0]?.continents.map((item, index, array) => (
                    <span key={item}>
                      {item}
                      {index !== array.length - 1 && ', '}
                    </span>
                  ))}
                </div>
              </InfoContent>
            </div>
            <NavLink
              to="/"
              className="flex items-center gap-2 lg:hidden hover:underline"
            >
              <ChevronLeft />
              Voltar
            </NavLink>
          </div>
        )}
      </main>
    </>
  )
}

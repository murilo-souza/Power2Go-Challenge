import { useEffect } from 'react'
import BgHero from '../assets/hero-image-wr.jpg'
import { useCountry } from '../context/countryContext'
import { useParams } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { InfoContent } from '../components/InfoContent'

export function CountryPage() {
  const { country } = useParams()
  const { countryDetails, fetchCountry } = useCountry()

  useEffect(() => {
    fetchCountry(country)
  }, [country])

  return (
    <>
      <div className="w-full">
        <img className="w-full relative -z-10" src={BgHero} alt="" />
      </div>
      <main className="max-w-3xl px-4 py-10 -mt-20 mx-auto mb-8 bg-zinc-800 rounded-lg">
        <div className="flex flex-col items-center">
          <div className="w-72 h-[11rem] rounded-xl overflow-hidden -mt-16">
            <img
              src={countryDetails[0]?.flags.png}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* <p className="mt-8 text-4xl">{countryDetails[0]?.name.common}</p>
          <span>{countryDetails[0]?.name.official}</span> */}

          <div className="flex items-center gap-8 my-8">
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
            <InfoContent title="Moedas">
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
        </div>
      </main>
    </>
  )
}

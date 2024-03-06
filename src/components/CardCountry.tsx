import { CountriesData } from '../context/countryContext'

interface ContentTableDataProps {
  data: CountriesData
}

export function CardCountry({ data }: ContentTableDataProps) {
  return (
    <div className="flex flex-col items-center justify-center p-3 rounded-[10px] bg-zinc-900 ">
      <div className="w-full min-h-40 max-h-40 mb-4">
        <img
          src={data?.flags.png}
          alt={data.name.common}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between border-b border-zinc-700">
          <span>Nome:</span>
          <span className="truncate max-w-32">{data.name.common}</span>
        </div>
        <div className="flex items-center justify-between border-b border-zinc-700">
          <span>Capital</span>
          <span className="truncate max-w-32">
            {data.capital !== undefined &&
              data?.capital.map((item) => <span key={item}>{item}</span>)}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-zinc-700">
          <span>População</span>
          <span>{data.population.toLocaleString('pt-BR')}</span>
        </div>
        <div className="flex items-center justify-between border-b border-zinc-700">
          <span>Moeda</span>
          <span className="truncate max-w-32">
            {data.currencies !== undefined &&
              Object.values(data?.currencies).map((item, index, array) => (
                <span key={item.name}>
                  {item.name}
                  {index !== array.length - 1 && ', '}
                </span>
              ))}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-zinc-700">
          <span>Idioma</span>
          <span className="truncate max-w-32">
            {data.languages !== undefined &&
              Object.values(data?.languages).map((item, index, array) => (
                <span key={item}>
                  {item}
                  {index !== array.length - 1 && ', '}
                </span>
              ))}
          </span>
        </div>
      </div>
    </div>
  )
}
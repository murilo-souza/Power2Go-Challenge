import { CountriesData, useCountry } from '../../context/countryContext'

interface ContentTableDataProps {
  data: CountriesData
}

export function ContentTable({ data }: ContentTableDataProps) {
  const { loading } = useCountry()

  if (loading) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <tr key={data?.name.common}>
      <td className="p-4 text-left">
        <div className="w-12 h-8 rounded overflow-hidden">
          <img
            src={data?.flags.png}
            alt={data.name.common}
            className="w-full h-full object-cover"
          />
        </div>
      </td>
      <td className="p-4 text-left">{data?.name.common}</td>
      <td className="p-4 text-left">
        {data.capital !== undefined &&
          data?.capital.map((item) => <span key={item}>{item}</span>)}
      </td>
      <td className="p-4 text-left">
        {data.population.toLocaleString('pt-BR')}
      </td>
      <td className="p-4 text-left">
        {data.currencies !== undefined &&
          Object.values(data?.currencies).map((item, index, array) => (
            <span key={item.name}>
              {item.name}
              {index !== array.length - 1 && ', '}
            </span>
          ))}
      </td>
      <td className="p-4 text-left">
        {data.languages !== undefined &&
          Object.values(data?.languages).map((item, index, array) => (
            <span key={item}>
              {item}
              {index !== array.length - 1 && ', '}
            </span>
          ))}
      </td>
    </tr>
  )
}

import { NavLink } from 'react-router-dom'
import { CountryData } from '../../context/countryContext'

interface ContentTableDataProps {
  data: CountryData
}

export function ContentTable({ data }: ContentTableDataProps) {
  return (
    <tr>
      <td className="p-4 text-left">
        <NavLink to={`/country-page/${data.name.common.toLowerCase()}`}>
          <div className="w-12 h-8 rounded overflow-hidden">
            <img
              src={data?.flags.png}
              alt={data.name.common}
              className="w-full h-full object-cover"
            />
          </div>
        </NavLink>
      </td>
      <td className="p-4 text-left truncate max-w-32">{data?.name.common}</td>
      <td className="p-4 text-left truncate max-w-32">
        {data.capital !== undefined &&
          data?.capital.map((item) => <span key={item}>{item}</span>)}
      </td>
      <td className="p-4 text-left">
        {data.population.toLocaleString('pt-BR')}
      </td>
      <td className="p-4 text-left truncate max-w-32">
        {data.currencies !== undefined &&
          Object.values(data?.currencies).map((item, index, array) => (
            <span key={item.name}>
              {item.name}
              {index !== array.length - 1 && ', '}
            </span>
          ))}
      </td>
      <td className="p-4 text-left truncate max-w-32">
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

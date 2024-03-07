import { NavLink } from 'react-router-dom'
import { CountryData } from '../../context/countryContext'

// tipagem para as propriedades do ContentTable
interface ContentTableDataProps {
  data: CountryData
}

// componente para o conteúdo da tabela de países
// carrega os dados vindo do contexto
export function ContentTable({ data }: ContentTableDataProps) {
  return (
    <tr>
      <td className="p-4 text-left">
        {/* link para a página de detalhes do país, informando o nome do país na rota */}
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
        {/* Faz a validação se o item é undefined */}
        {data.capital !== undefined &&
          data?.capital.map((item) => <span key={item}>{item}</span>)}
      </td>
      <td className="p-4 text-left">
        {data.population.toLocaleString('pt-BR')}
      </td>
      <td className="p-4 text-left truncate max-w-32">
        {/* Faz a validação se o item é undefined */}
        {data.currencies !== undefined &&
          Object.values(data?.currencies).map((item, index, array) => (
            <span key={item.name}>
              {item.name}
              {index !== array.length - 1 && ', '}
            </span>
          ))}
      </td>
      <td className="p-4 text-left truncate max-w-32">
        {/* Faz a validação se o item é undefined */}
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

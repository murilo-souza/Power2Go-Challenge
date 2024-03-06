interface ContentTableProps {
  name: {
    common: string
  }
  region: string
  subregion: string
  area: number
  population: number
  flags: {
    png: string
  }
  unMember: boolean
  independent: boolean
}

interface ContentTableDataProps {
  data: ContentTableProps
}

export function ContentTable() {
  return (
    <tr>
      <td className="p-4 text-left">
        <div>Flag</div>
      </td>
      <td className="p-4 text-left">China</td>
      <td className="p-4 text-left">Capital</td>
      <td className="p-4 text-left">Populacão</td>
      <td className="p-4 text-left">Nome da Moeda</td>
      <td className="p-4 text-left">Idioma</td>
    </tr>
  )
}

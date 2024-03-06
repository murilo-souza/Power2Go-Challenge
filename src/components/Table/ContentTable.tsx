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
      <td>
        <div>Flag</div>
      </td>
      <td>China</td>
      <td>Capital</td>
      <td>Populacão</td>
      <td>Nome da Moeda</td>
      <td>Idioma</td>
    </tr>
  )
}

import { ReactNode } from 'react'

interface HeaderTableProps {
  children: ReactNode
}

export function HeaderTable({ children }: HeaderTableProps) {
  return (
    <table className="w-full border-spacing-1 border-collapse">
      <thead>
        <tr>
          <th className="text-zinc-200 text-xs p-4 text-left border-b-2 border-zinc-700 border-solid">
            Flag
          </th>
          <th className="text-zinc-200 text-xs p-4 text-left border-b-2 border-zinc-700 border-solid">
            Nome
          </th>
          <th className="text-zinc-200 text-xs p-4 text-left border-b-2 border-zinc-700 border-solid">
            Capital
          </th>
          <th className="text-zinc-200 text-xs p-4 text-left border-b-2 border-zinc-700 border-solid">
            Populacão
          </th>
          <th className="text-zinc-200 text-xs p-4 text-left border-b-2 border-zinc-700 border-solid">
            Moeda
          </th>
          <th className="text-zinc-200 text-xs p-4 text-left border-b-2 border-zinc-700 border-solid">
            Idioma
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

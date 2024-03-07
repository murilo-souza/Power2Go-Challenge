import { ReactNode } from 'react'

// tipagem para as propriedades do HeaderTable
interface HeaderTableProps {
  // children para poder incluir qualquer conteudo dentro do componente
  children: ReactNode
}

export function HeaderTable({ children }: HeaderTableProps) {
  return (
    <table className="w-full">
      <thead className="sticky top-0 bg-zinc-800 shadow-md">
        <tr>
          <th className="text-zinc-200 text-xs p-4 text-left">Bandeira</th>
          <th className="text-zinc-200 text-xs p-4 text-left">Nome</th>
          <th className="text-zinc-200 text-xs p-4 text-left">Capital</th>
          <th className="text-zinc-200 text-xs p-4 text-left">População</th>
          <th className="text-zinc-200 text-xs p-4 text-left">Moeda</th>
          <th className="text-zinc-200 text-xs p-4 text-left">Idioma</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-zinc-700">{children}</tbody>
    </table>
  )
}

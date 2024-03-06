import { SelectHTMLAttributes } from 'react'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export function OrganizerSelect({ ...rest }: SelectProps) {
  return (
    <select
      {...rest}
      className="inline-flex items-center justify-center rounded-lg py-0 px-3 text-sm h-10 bg-zinc-800 text-zinc-200 border-2 border-solid border-zinc-700"
    >
      <option
        className="text-sm text-zinc-200 rounded flex items-center h-6 py-0 pl-9 pr-6 relative select-none"
        value="table"
      >
        Tabela
      </option>
      <option
        className="text-sm text-zinc-200 rounded flex items-center h-6 py-0 pl-9 pr-6 relative select-none"
        value="card"
      >
        Cartão
      </option>
    </select>
  )
}

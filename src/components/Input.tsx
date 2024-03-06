import { InputHTMLAttributes } from 'react'
import { Search } from 'lucide-react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...rest }: InputProps) {
  return (
    <div className="flex items-center p-3 rounded-lg bg-zinc-600">
      <Search size={20} className="text-zinc-400" />
      <input
        {...rest}
        className="bg-transparent max-w-80 h-6 text-zinc-100 ml-4 outline-none min-w-80"
      />
    </div>
  )
}

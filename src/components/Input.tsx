import { InputHTMLAttributes } from 'react'
import { Search } from 'lucide-react'

// tipagem para poder usar os atributos do input
type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...rest }: InputProps) {
  return (
    <div className="flex items-center lg:p-3 p-2 rounded-lg bg-zinc-600">
      <Search size={20} className="text-zinc-400" />
      <input
        {...rest}
        className="bg-transparent lg:max-w-80 h-6 text-zinc-100 ml-4 outline-none lg:min-w-80"
      />
    </div>
  )
}

import { ReactNode } from 'react'

// tipagem para as propriedades do OrganizerWrapper
interface OrganizerWrapperProps {
  children: ReactNode
  title: string
}

// componente para embrulhar cada item do lado esquerdo, definindo o título
export function OrganizerWrapper({ title, children }: OrganizerWrapperProps) {
  return (
    <div className="flex flex-col mb-4 pt-4">
      <span className="text-lg text-zinc-300 mb-2">{title}</span>
      {children}
    </div>
  )
}

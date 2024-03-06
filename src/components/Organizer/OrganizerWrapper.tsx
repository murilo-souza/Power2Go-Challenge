import { ReactNode } from 'react'

interface OrganizerWrapperProps {
  children: ReactNode
  title: string
}

export function OrganizerWrapper({ title, children }: OrganizerWrapperProps) {
  return (
    <div className="flex flex-col mb-4 pt-4">
      <span className="text-lg text-zinc-300 mb-2">{title}</span>
      {children}
    </div>
  )
}

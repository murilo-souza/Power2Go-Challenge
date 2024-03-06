import { ReactNode } from 'react'

interface InfoContentProps {
  title: string
  children: ReactNode
}

export function InfoContent({ title, children }: InfoContentProps) {
  return (
    <section className="flex items-center justify-between w-full p-5">
      <h4 className="text-xs text-zinc-300">{title}</h4>
      {children}
    </section>
  )
}

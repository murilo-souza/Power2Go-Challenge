interface BadgeProps {
  title: string
  value: number
}

export function Badge({ title, value }: BadgeProps) {
  return (
    <div className="py-2 px-6 flex items-center justify-center bg-zinc-700 gap-4 rounded-xl">
      <h3 className="text-base">{title}</h3>
      <div className="w-0.5 h-8 bg-zinc-800" />
      <span className="text-base">
        {value !== undefined && value.toLocaleString('pt-BR')}
      </span>
    </div>
  )
}

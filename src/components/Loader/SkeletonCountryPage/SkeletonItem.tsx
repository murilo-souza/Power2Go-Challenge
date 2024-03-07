interface InfoContentProps {
  title: string
}

export function SkeletonItem({ title }: InfoContentProps) {
  return (
    <section className="flex items-center justify-between w-full p-5">
      <h4 className="text-xs text-zinc-300">{title}</h4>
      <div className=" h-9 w-52 bg-zinc-600 rounded-md animate-pulse" />
    </section>
  )
}

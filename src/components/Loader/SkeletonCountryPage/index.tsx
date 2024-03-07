import { SkeletonBadge } from './SkeletonBadge'
import { SkeletonItem } from './SkeletonItem'

// Skeleton loader para a página de um país
export function SkeletonCountryPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-72 h-[11rem] rounded-xl overflow-hidden -mt-24 bg-zinc-600 animate-pulse"></div>

      <div className="lg:flex flex-col lg:flex-row items-center lg:gap-8 my-8">
        <SkeletonBadge />
        <SkeletonBadge />
      </div>

      <div className="w-full divide-y divide-zinc-700">
        <SkeletonItem title="Nome" />

        <SkeletonItem title="Nome inteiro" />

        <SkeletonItem title="Capital" />

        <SkeletonItem title="Idiomas" />

        <SkeletonItem title="Moedas" />

        <SkeletonItem title="Continente" />
      </div>
    </div>
  )
}

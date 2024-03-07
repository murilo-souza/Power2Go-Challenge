import { SkeletonItem } from './SkeletonItem'

// Skeleton loader para a tabela de países
export function SkeletonHome() {
  return (
    <tr>
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </tr>
  )
}

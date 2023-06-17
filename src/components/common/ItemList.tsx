import Transition from '@/layout/Transition'
import { useCallback } from 'react'

interface Props<T> {
  click?: (item: T) => void
  items: T[]
  renderItem: (item: T) => React.ReactElement
  className?: string
  opacity?: number
}

const ItemList = <T,>({ items, click, renderItem, className, opacity }: Props<T>) => {
  const RenderList = useCallback(() => {
    return (
      <Transition className={className} opacity={opacity}>
        {items.map((item) => renderItem(item))}
      </Transition>
    )
  }, [items])
  return <RenderList />
}

export default ItemList

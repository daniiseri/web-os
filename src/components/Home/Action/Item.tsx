import { LucideIcon } from 'lucide-react';
import { Card } from '../../Card';

interface Props {
  title: string
  shortcut: string
  Icon: LucideIcon
  className: string
}

export function Item({ shortcut, title, className, Icon }: Props) {
  return (
    <Card.Root className={className}>
      <div className='overflow-hidden text-ellipsis'>
        <Card.Title title={title} />
        <Card.Shortcut shortcut={shortcut} />
      </div>
      <Card.Icon Icon={Icon}  />
    </Card.Root>
  )
}
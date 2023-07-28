import clsx from "clsx"
import { LucideIcon } from "lucide-react"

interface Props {
  Icon: LucideIcon
  onlyIcon?: boolean
  fill?: string
  stroke?: string
}

export function Icon({ Icon, onlyIcon, fill, stroke }: Props) {
  return (
    <div className={clsx('p-2 rounded-2xl', !onlyIcon && 'bg-gray-200 opacity-50')}>
      <Icon size={32} stroke={stroke ?? 'black'} fill={fill ?? 'transparent'}/>
    </div>
  )
}
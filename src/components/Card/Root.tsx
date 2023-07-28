import { ReactNode } from "react"

interface Props {
  className: string
  children: ReactNode
}

export function Root({ className, children }: Props) {
  return (
    <li className={`flex sm:w-1/6 px-3 py-4 justify-around items-center gap-1 rounded-lg ${className}`}>
      {children}
    </li>
  )
}
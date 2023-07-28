'use client'

import { ActionContext } from "@/contexts/Actions"
import { ReactNode, useContext } from "react"

interface Props {
  action: 'create' | 'readOnly' | 'update' | 'delete'
  children: ReactNode
  className?: string
}

export function ActionsButton({ action, children, className }: Props) {
  const { setAction } = useContext(ActionContext)

  return (
    <button
      onClick={() => setAction(action)}
      className={className}
    >
      {children}
    </button>
  )
}
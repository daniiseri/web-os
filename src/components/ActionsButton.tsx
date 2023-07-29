'use client'

import { ActionContext } from "@/contexts/Actions"
import { useAppDispatch } from "@/hooks/store"
import { ReactNode, useContext } from "react"

interface Props {
  action: 'create' | 'readOnly' | 'update' | 'delete'
  children: ReactNode
  className?: string
  handleSelectedItem?: () => void
}

export function ActionsButton({ action, children, className, handleSelectedItem }: Props) {
  const { setAction } = useContext(ActionContext)
  const dispatch = useAppDispatch()

  return (
    <button
      onClick={() => {
        handleSelectedItem && handleSelectedItem()
        setAction(action)
      }}
      className={className}
    >
      {children}
    </button>
  )
}
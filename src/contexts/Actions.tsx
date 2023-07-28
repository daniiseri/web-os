'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface IActionContext {
  action: 'create' | 'readOnly' | 'update' | 'delete',
  setAction: Dispatch<SetStateAction<'create' | 'readOnly' | 'update' | 'delete'>>
  isCreate: () => boolean
  isReadOnly: () => boolean
  isUpdate: () => boolean
  isDelete: () => boolean
}

export const ActionContext = createContext({} as IActionContext)

export function ActionProvider({ children }: { children: ReactNode }) {
  const [action, setAction] = useState<'create' | 'readOnly' | 'update' | 'delete'>('readOnly')

  function isCreate() {
    return action === 'create'
  }

  function isReadOnly() {
    return action === 'readOnly'
  }

  function isUpdate() {
    return action === 'update'
  }

  function isDelete() {
    return action === 'delete'
  }

  return (
    <ActionContext.Provider
      value={{
        action,
        setAction,
        isCreate,
        isReadOnly,
        isUpdate,
        isDelete
      }}
    >
      {children}
    </ActionContext.Provider>
  )
}
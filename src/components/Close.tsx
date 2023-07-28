'use client'

import { ActionContext } from '@/contexts/Actions'
import { XCircle } from 'lucide-react'
import { useContext } from 'react'

export function Close() {
  const { setAction } = useContext(ActionContext)

  return <XCircle onClick={() => setAction('readOnly')} size={20} className='cursor-pointer'/>
}
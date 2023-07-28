'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  formatDate: () => string
  prev: () => void
  next: () => void
}

export function Month({ formatDate, prev, next }: Props) {


  return (
    <div className='flex justify-between'>
      <div>
        <h2>{formatDate()}</h2>
      </div>
      <div className='flex'>
        <button
          className='bg-gray-100 rounded-l-lg border border-gray-500 text-gray-500 py-1 px-2'
          onClick={() => prev()}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className='bg-gray-100 rounded-r-lg border border-gray-500 text-gray-500 py-1 px-2'
          onClick={() => next()}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
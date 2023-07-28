import { ReactNode } from "react";

export function Root({ children }: { children: ReactNode }) {
  return (
    <div className='relative w-full'>{children}</div>
  )
}
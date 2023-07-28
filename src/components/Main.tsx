import { ReactNode } from "react";

export function Main({ children }: { children: ReactNode }) {
  return (
    <main className="sm:ml-24 sm:mr-7 w-full">
      {children}
    </main>
  )
}
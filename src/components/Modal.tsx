import { ReactNode } from "react";

export function Modal({children}: { children: ReactNode }){
  return (
    <div
      className="z-10 w-full h-screen fixed opacity-60 bg-black top-0 left-0 flex justify-center items-center"
    >
      {children}
    </div>
  )
}
import { Filter } from "lucide-react";

export function FilterButton() {
  return (
    <button className="flex items-center ml-4">
      <span className="bg-[#006dcc] grayscale-[0.25] text-white p-2 rounded-l">
        <Filter size={16} />
      </span>
      <span className="bg-[#006dcc] text-white text-xs p-2 rounded-r">Filtrar</span>
    </button>
  )
}
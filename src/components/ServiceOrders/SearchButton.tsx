import { Search } from "lucide-react";

export function SearchButton() {
  return (
    <button className="bg-[#faa732] grayscale-[0.25] text-white rounded p-[0.375rem]">
      <Search size={16} />
    </button>
  )
}
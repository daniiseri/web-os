import { ChangeEvent } from "react"

interface Props {
  label?: string
  id: string
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: any
  isNumber?: boolean
  required?: boolean
}

export function FieldForm({ label, onChange, value, id, name, isNumber, required }: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-xs">{label ?? ''}</label>
      <input 
        id={id} 
        name={name} 
        value={isNumber ? value.toString().replace(/\D/g, '') : value} 
        onChange={onChange} 
        className=" px-2 py-1 rounded bg-gray-100 border border-gray-200 text-sm"
        required={required ?? false}
      />
    </div>
  )
}
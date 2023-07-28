interface Props {
  value: number
}

export function Value({ value }: Props) {
  return (
    <div className="text-2xl font-extrabold">
      {value}
    </div>
  )
}
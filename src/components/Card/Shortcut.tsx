interface Props {
  shortcut: string
}

export function Shortcut({ shortcut }: Props){
  return (
    <div className='text-sm'>{shortcut}</div>
  )
}
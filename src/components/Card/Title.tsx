interface Props {
  title: string
}

export function Title({ title }: Props){
  return (
    <div className='font-semibold overflow-hidden text-ellipsis'>{title}</div>
  )
}
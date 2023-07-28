import Image from 'next/image'

interface Props {
  picture: string
}

export function Profile({ picture }: Props) {

  return (
    <Image src={picture} width={24} height={24} alt='' className='rounded-full cursor-pointer' />
  )
}
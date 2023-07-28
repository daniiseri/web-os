import { isString } from 'lodash';

import { LucideIcon } from "lucide-react";
import { Card } from '../../Card'
import Image from 'next/image';

interface Props {
  title: string
  value: number
  Icon: LucideIcon | string,
  fill: string
  stroke: string
}

export function Item({ title, value, Icon, fill, stroke }: Props) {
  return (
    <a className='flex flex-col items-center border rounded border-gray-200 w-[45%]'>
      <Card.Root className="flex-col">
        {
          isString(Icon)
            ?
            <Image src={Icon} alt='' width={32} height={32}/>
            :
            <Card.Icon Icon={Icon} onlyIcon fill={fill} stroke={stroke}/>
        }
        <Card.Value value={value} />
        <Card.Title title={title} />
      </Card.Root>
    </a>
  )
}
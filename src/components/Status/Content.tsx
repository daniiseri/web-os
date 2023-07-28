import { Search } from "lucide-react"

interface Props {
  hasIcon?: boolean
}

export function Content({ hasIcon }: Props) {
  return (
    <>
      <select className={`${hasIcon && 'pl-8'} py-[0.375rem] border border-gray-300 rounded w-full text-xs`}>
        <option>Todos os status</option>
        <option>Aberto</option>
        <option>Faturado</option>
        <option>Negociação</option>
        <option>Orçamento</option>
        <option>Em Andamento</option>
        <option>Finalizado</option>
        <option>Cancelado</option>
        <option>Aguradando peças</option>
        <option>Aprovado</option>
      </select>
      {
        hasIcon && <Search size={16} className='absolute left-2 top-1/2 -translate-y-1/2' />
      }
    </>
  )
}
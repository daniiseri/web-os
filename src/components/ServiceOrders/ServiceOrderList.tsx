import { isLength } from 'lodash';
import { PlusCircle } from 'lucide-react';
import { Status } from '../Status';
import { SearchCustomerName } from './SearchCustomerName';
import { Between } from './Between';
import { SearchButton } from './SearchButton';

interface Props {
  serviceOrders?: any[]
}

export function ServiceOrderList({ serviceOrders }: Props) {
  return (
    <div className='w-sreen flex flex-col gap-3 p-3 rounded-md bg-white'>
      <h5 className='px-4 font-semibold text-xl'>Ordens de Serviço</h5>
      <div className='flex justify-between items-center'>
        <button className='flex items-center'>
          <span className='text-white p-2 bg-[#23b685] rounded-l-md'><PlusCircle size={16} /></span>
          <span className='text-white p-2 bg-[#54c795] rounded-r-md text-xs'>
            Ordem de Serviço
          </span>
        </button>
        <div className='flex items-center gap-5'>
          <SearchCustomerName />
          <Status.Root>
            <Status.Content/>
          </Status.Root>
          <Between />
          <SearchButton />
        </div>
      </div>
      <div className="w-full bg-white border border-gray-300 rounded-md text-xs pt-6 mt-3">
        <table className='w-full'>
          <thead>
            <tr>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Nº.</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Cliente</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Responsável</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Data Inicial</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Data Final</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Valor Total</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Valor com Desconto</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">VT. (Faturado)</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Status</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              !isLength(serviceOrders)
              &&
              <tr>
                <td colSpan={6} className='p-2'>Nenhuma OS Cadastrada</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
import { isLength } from 'lodash';
import { PlusCircle } from 'lucide-react';

interface Props {
  sales?: any[]
}

export function SaleList({ sales }: Props) {
  return (
    <div className='w-sreen flex flex-col gap-3 p-3 rounded-md bg-white'>
      <h5 className='px-4 font-semibold text-xl'>Vendas</h5>
      <button className='flex items-center'>
        <span className='text-white p-2 bg-[#23b685] rounded-l-md'><PlusCircle size={16} /></span>
        <span className='text-white p-2 bg-[#54c795] rounded-r-md text-xs'>
          Vendas
        </span>
      </button>
      <div className="w-full bg-white border border-gray-300 rounded-md text-xs pt-6 mt-3">
        <table  className='w-full'>
          <thead>
            <tr>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Nº.</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Data</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Cliente</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Faturado</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              !isLength(sales)
              &&
              <tr>
                <td colSpan={6} className='p-2'>Nenhuma Venda Cadastrada</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
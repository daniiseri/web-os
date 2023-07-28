import { isLength } from 'lodash';
import { PlusCircle } from 'lucide-react';

interface Props {
  warranties?: any[]
}

export function WarrantyList({ warranties }: Props) {
  return (
    <div className='w-sreen flex flex-col gap-3 p-3 rounded-md bg-white'>
      <h5 className='px-4 font-semibold text-xl'>Termo de Garantia</h5>
      <button className='flex items-center'>
        <span className='text-white p-2 bg-[#23b685] rounded-l-md'><PlusCircle size={16} /></span>
        <span className='text-white p-2 bg-[#54c795] rounded-r-md text-xs'>
          Termo de Garantia
        </span>
      </button>
      <div className="w-full bg-white border border-gray-300 rounded-md text-xs pt-6 mt-3">
        <table  className='w-full'>
          <thead>
            <tr>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">#</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Data</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Ref. Garantia</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Termo de Garantia</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Usuário</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              !isLength(warranties)
              &&
              <tr>
                <td colSpan={6} className='p-2'>Nenhum Termo de Garantia Cadastrado</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
import { isLength } from 'lodash';
import { PlusCircle } from 'lucide-react';
import { SearchDocumentName } from './SearchDocumentName';
import { Between } from './Between';
import { SearchButton } from './SearchButton';

interface Props {
  sales?: any[]
}

export function FileList({ sales }: Props) {
  return (
    <div className='w-sreen flex flex-col gap-3 p-3 rounded-md bg-white'>
      <h5 className='px-4 font-semibold text-xl'>Arquivos</h5>
      <div className='flex justify-between items-center'>
        <button className='flex items-center'>
          <span className='text-white p-2 bg-[#23b685] rounded-l-md'><PlusCircle size={16} /></span>
          <span className='text-white p-2 bg-[#54c795] rounded-r-md text-xs'>
            Arquivo
          </span>
        </button>
        <div className='flex items-center gap-5'>
          <SearchDocumentName />
          <Between />
          <SearchButton />
        </div>
      </div>
      <div className="w-full bg-white border border-gray-300 rounded-md text-xs pt-6 mt-3">
        <table className='w-full'>
          <thead>
            <tr>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">#</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Miniatura</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Nome</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Data</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Descrição</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Tamanho</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Extensão</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              !isLength(sales)
              &&
              <tr>
                <td colSpan={6} className='p-2'>Nenhuma Arquivo Encontrado</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
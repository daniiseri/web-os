import { isLength } from 'lodash';

interface Props {
  charges?: any[]
}

export function ChargeList({ charges }: Props) {
  return (
    <div className='w-sreen flex flex-col gap-3 p-3 rounded-md bg-white'>
      <h5 className='px-4 font-semibold text-xl'>Cobranças</h5>
      <div className="w-full bg-white border border-gray-300 rounded-md text-xs mt-3">
        <table  className='w-full'>
          <thead>
            <tr>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">#</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Gateway</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Tipo</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Data de Vencimento</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Referência</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Status</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Valor</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              !isLength(charges)
              &&
              <tr>
                <td colSpan={6} className='p-2'>Nenhuma Cobrança Cadastrada</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
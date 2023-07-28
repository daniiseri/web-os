import { isLength } from 'lodash';
import { PlusCircle } from 'lucide-react';
import { Status } from './Status';
import { SearchCustomer } from './SearchCustomer';
import { Between } from './Between';
import { Type } from './Type';
import { FilterButton } from './FilterButton';

interface Props {
  financialReleases?: any[]
}

export function FinancialReleaseList({ financialReleases }: Props) {
  return (
    <div className='w-sreen flex flex-col gap-3 p-3 rounded-md bg-white'>
      <h5 className='px-4 font-semibold text-xl'>Lançamentos Financeiros</h5>
      <button className='flex items-center'>
        <span className='text-white p-2 bg-[#23b685] rounded-l-md'><PlusCircle size={16} /></span>
        <span className='text-white p-2 bg-[#54c795] rounded-r-md text-xs'>
          Receita/Despesa
        </span>
      </button>
      <div className='w-full flex items-center text-xs gap-5'>
        <Between />
        <Type />
        <Status />
        <SearchCustomer />
      </div>
      <FilterButton />
      <div className="w-full bg-white border border-gray-300 rounded-md text-xs pt-6 mt-1">
        <table className='w-full'>
          <thead>
            <tr>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">#</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Tipo</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Cliente / Fornecedor</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Descrição</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Vencimento</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Status</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Observações</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Forma de Pagamento</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Valor (+)</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Desconto (-)</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Valor Total (=)</th>
              <th className="border-b border-b-gray-300 p-2 text-start font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              !isLength(financialReleases)
              &&
              <tr>
                <td colSpan={12} className='p-2 border-b border-b-gray-300'>Nenhum Lançamento encontrado</td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr>
              <td className='text-red-500 text-center border-b border-b-gray-300 p-2' colSpan={12}>Total Receitas:	R$ 0,00</td>
            </tr>
            <tr>
              <td className='text-green-500 text-center border-b border-b-gray-300 p-2' colSpan={12}>Total Despesas:	R$ 0,00</td>
            </tr>
            <tr>
              <td className='border-b border-b-gray-300 p-2' colSpan={7}>Saldo:	R$ 0,00</td>
            </tr>
            <tr>
              <td className='border-b border-b-gray-300 p-2 font-semibold' colSpan={7}>Estatísticas Gerais do Financeiro:</td>
            </tr>
            <tr>
              <td className='border-b border-b-gray-300 p-2 text-red-500' colSpan={7}>Total Receitas (Pagas): R$ 0,00</td>
            </tr>
            <tr>
              <td className='border-b border-b-gray-300 p-2 text-green-500' colSpan={7}>Total Despesas (Pagas): R$ 0,00</td>
            </tr>
            <tr>
              <td className='border-b border-b-gray-300 p-2 font-semibold' colSpan={7}>Total Receitas (-) Despesas = Saldo Líquido: R$ 0,00</td>
            </tr>
            <tr>
              <td className='border-b border-b-gray-300 p-2' colSpan={7}>Total Receitas (+) Despesas: R$ 0,00</td>
            </tr>
            <tr>
              <td className='border-b border-b-gray-300 p-2' colSpan={7}>Total Receitas Pendentes: R$ 0,00</td>
            </tr>
            <tr>
              <td className='border-b border-b-gray-300 p-2' colSpan={7}>Total Despesas Pendentes: R$ 0,00</td>
            </tr>
            <tr>
              <td className='border-b border-b-gray-300 p-2' colSpan={7}>Total de Receitas Pendentes (-) Despesas Pendentes: R$ 0,00</td>
            </tr>
            <tr>
              <td className='border-b border-b-gray-300 p-2 font-semibold' colSpan={7}>Total de Receitas Pendentes (+) Despesas Pendentes: R$ 0,00</td>
            </tr>
            <tr>
              <td className='border-b border-b-gray-300 p-2' colSpan={7}>Total de Descontos aplicados á lançamentos Pagos: R$ 0,00</td>
            </tr>
            <tr>
              <td className='border-b border-b-gray-300 p-2' colSpan={7}>Total de Descontos aplicados á lançamentos Pendentes: R$ 0,00</td>
            </tr>
            <tr>
              <td className='border-b border-b-gray-300 p-2 font-semibold' colSpan={7}>Total de descontos aplicados (pagos + pendentes): R$ 0,00</td>
            </tr>
            <tr>
              <td className='border-b border-b-gray-300 p-2' colSpan={7}>Total de Receitas sem descontos aplicados (pagos + pendentes): R$ 0,00</td>
            </tr>
            <tr>
              <td className=' p-2' colSpan={7}>Total de Despesas sem descontos aplicados (pagos + pendentes): R$ 0,00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
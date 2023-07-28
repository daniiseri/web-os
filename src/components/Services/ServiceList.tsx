'use client'

import { size } from 'lodash';
import { PlusCircle } from 'lucide-react';
import { ActionsButton } from '../ActionsButton';
import { useAppSelector } from '@/hooks/store';
import { selectServices } from '@/GlobalRedux/features/servicesSlice';

export function ServiceList() {
  const services = useAppSelector(selectServices)

  return (
    <div className='w-sreen flex flex-col gap-3 p-3 rounded-md bg-white'>
      <h5 className='px-4 font-semibold text-xl'>Serviços</h5>
      <ActionsButton action='create' className='flex items-center'>
        <span className='text-white p-2 bg-[#23b685] rounded-l-md'><PlusCircle size={16} /></span>
        <span className='text-white p-2 bg-[#54c795] rounded-r-md text-xs'>
          Serviços
        </span>
      </ActionsButton>
      <div className="w-full bg-white border border-gray-300 rounded-md text-xs pt-6 mt-3">
        <table className='w-full'>
          <thead>
            <tr>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Cod.</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Nome</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Preço</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Descrição</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              size(services) > 0
                ? services?.map(service => {
                  return (
                    <tr key={service.id}>
                      <td>{service.id}</td>
                      <td>{service.name}</td>
                      <td>{Number(service.price).toFixed(2)}</td>
                      <td>{service.description}</td>
                    </tr>
                  )
                })
                : (
                  <tr>
                    <td colSpan={6} className='p-2'>Nenhum Serviço Cadastrado</td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
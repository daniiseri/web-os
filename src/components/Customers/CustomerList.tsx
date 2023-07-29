'use client'

import { size } from 'lodash';
import { Pencil, PlusCircle, Trash2 } from 'lucide-react';
import { ActionsButton } from '../ActionsButton';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { initializeCustomers, selectCustomers, handleSelectedCustomer } from '@/GlobalRedux/features/customersSlice';
import { useEffect } from 'react';

export function CustomerList() {
  const customers = useAppSelector(selectCustomers)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeCustomers())
  }, [dispatch])

  return (
    <div className='w-sreen flex flex-col gap-3 p-3 rounded-md bg-white'>
      <h5 className='px-4 font-semibold text-xl'>Clientes</h5>
      <ActionsButton action='create' className='flex items-center'>
        <span className='text-white p-2 bg-[#23b685] rounded-l-md'><PlusCircle size={16} /></span>
        <span className='text-white p-2 bg-[#54c795] rounded-r-md text-xs'>
          Cliente / Fornecedor
        </span>
      </ActionsButton>
      <div className="w-full bg-white border border-gray-300 rounded-md text-xs pt-6 mt-3">
        <table className='w-full'>
          <thead>
            <tr>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Cod.</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Nome</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">CPF/CNPJ</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Telefone</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Email</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              size(customers) > 0
                ?
                customers?.map(customer => {
                  return (
                    <tr key={customer.id}>
                      <td>{customer.id}</td>
                      <td>{customer.name}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <div className='flex gap-1'>
                          <ActionsButton
                            action='update'
                            className='bg-blue-500 p-1 rounded border border-blue-600'
                            handleSelectedItem={() => dispatch(handleSelectedCustomer(customer))}
                          >
                            <Pencil size={16} />
                          </ActionsButton>
                          <ActionsButton
                            action='delete'
                            className='bg-red-500 p-1 rounded border border-red-600'
                            handleSelectedItem={() => dispatch(handleSelectedCustomer(customer))}
                          >
                            <Trash2 size={16} />
                          </ActionsButton>
                        </div>
                      </td>
                    </tr>
                  )
                })
                :
                <tr>
                  <td colSpan={6} className='p-2'>Nenhum Cliente Cadastrado</td>
                </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
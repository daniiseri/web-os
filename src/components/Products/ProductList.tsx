'use client'

import { size } from 'lodash';
import { Pencil, PlusCircle, Scan, Tally4, Trash2 } from 'lucide-react';
import { ActionsButton } from '../ActionsButton';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { handleSelectedProduct, initializeProducts, selectProducts } from '@/GlobalRedux/features/productsSlice';
import { useEffect } from 'react';

export function ProductList() {
  const products = useAppSelector(selectProducts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeProducts())
  }, [dispatch])

  return (
    <div className='w-sreen flex flex-col gap-3 p-3 rounded-md bg-white'>
      <h5 className='px-4 font-semibold text-xl'>Produtos</h5>
      <div className='flex gap-2'>
        <ActionsButton action='create' className='flex items-center'>
          <span className='text-white p-2 bg-[#23b685] rounded-l-md'><PlusCircle size={16} /></span>
          <span className='text-white p-2 bg-[#54c795] rounded-r-md text-xs'>
            Produtos
          </span>
        </ActionsButton>

        <button className='flex items-center'>
          <span className='text-white p-2 bg-[#faa732] grayscale-[0.25] rounded-l-md relative'>
            <div className='w-4 h-4' />
            <Scan size={16} className='absolute top-1/2 -translate-y-1/2' />
            <Tally4 size={12} className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
          </span>
          <span className='text-white p-2 bg-[#faa732] rounded-r-md text-xs'>
            Gerar Etiquetas
          </span>
        </button>
      </div>
      <div className="w-full bg-white border border-gray-300 rounded-md text-xs pt-6 mt-3">
        <table className='w-full'>
          <thead>
            <tr>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Cod.</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Cod. Barra</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Nome</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Estoque</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Preço</th>
              <th className="border-b border-b-gray-300 p-2 w-1/6 text-start font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              size(products) > 0
                ? products?.map(product => {
                  return (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td></td>
                      <td>{product.description}</td>
                      <td>{product.stock}</td>
                      <td>{Number(product.salePrice).toFixed(2)}</td>
                      <td>
                        <div className='flex gap-1'>
                          <ActionsButton
                            action='update'
                            className='bg-blue-500 p-1 rounded border border-blue-600'
                            handleSelectedItem={() => dispatch(handleSelectedProduct(product))}
                          >
                            <Pencil size={16} />
                          </ActionsButton>
                          <ActionsButton
                            action='delete'
                            className='bg-red-500 p-1 rounded border border-red-600'
                            handleSelectedItem={() => dispatch(handleSelectedProduct(product))}
                          >
                            <Trash2 size={16} />
                          </ActionsButton>
                        </div>
                      </td>
                    </tr>
                  )
                })
                : (
                  <tr>
                    <td colSpan={6} className='p-2'>Nenhum Produto Cadastrado</td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
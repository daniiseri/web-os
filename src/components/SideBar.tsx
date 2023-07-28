'use client'

import {
  Cpu,
  Search,
  Home,
  User,
  Package,
  Wrench,
  ShoppingCart,
  FileText,
  BarChartBig,
  CircleDollarSign,
  ArrowLeft,
  ChevronRightCircle,
  ChevronLeftCircle,
  Archive,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function SideBar() {
  const [activeLink, setActiveLink] = useState<string>('home');
  const [mode, setMode] = useState<'open' | 'close'>('close');

  return (
    <nav className={`h-screen fixed flex flex-col gap-5 border-r border-r-gray-300 text-gray-500 items-center bg-gray-100 px-5 z-10 ${mode === 'close' ? 'sm:w-20' : 'sm:w-52'}  `}>
      <li className='w-full flex items-center p-2 hover:text-black cursor-pointer hover:bg-gray-200 hover:rounded'><Cpu size={28} /><span className={`bg-transparent ${mode === 'close' ? 'w-0 overflow-hidden' : 'ml-2 text-sm'}`}>HELPTECH-OS</span></li>
      <li className='w-full flex items-center border border-gray-200 rounded-md py-2 px-3'><button><Search size={16} /></button><input placeholder='Pesquise aqui' className={`bg-transparent ${mode === 'close' ? 'w-0 overflow-hidden' : 'w-full inline-block ml-2 text-sm'}`} /></li>

      {
        mode === 'close'
          ? <ChevronRightCircle
            size={28}
            className='absolute -right-3 cursor-pointer top-1/2 -translate-y-1/2'
            onClick={() => setMode('open')}
          />
          : <ChevronLeftCircle
            size={28}
            className='absolute -right-3 cursor-pointer top-1/2 -translate-y-1/2'
            onClick={() => setMode('close')}
          />
      }

      <ul className='flex flex-col gap-[0.125rem]'>
        <Link href='/' onClick={() => setActiveLink('home')}><li className={`flex items-center h-10 py-3 px-3 hover:text-black cursor-pointer hover:bg-gray-200 hover:rounded ${activeLink === 'home' && 'bg-gray-300 hover:bg-gray-400 hover:opacity-60 rounded'}`}> <Home size={16} /> <span className={`${mode === 'close' ? 'w-0 overflow-hidden' : 'ml-2 text-xs'}`}>Home</span></li></Link>
        <Link href='/customers' onClick={() => setActiveLink('customers')}><li className={`flex items-center h-10 py-3 px-3 hover:text-black cursor-pointer hover:bg-gray-200 hover:rounded ${activeLink === 'customers' && 'bg-gray-300 hover:bg-gray-400 hover:opacity-60 rounded'}`}><User size={16} /> <span className={`${mode === 'close' ? 'w-0 overflow-hidden' : 'ml-2 text-xs'}`}>Cliente / Fornecedor</span></li></Link>
        <Link href='/products' onClick={() => setActiveLink('products')}><li className={`flex items-center h-10 py-3 px-3 hover:text-black cursor-pointer hover:bg-gray-200 hover:rounded ${activeLink === 'products' && 'bg-gray-300 hover:bg-gray-400 hover:opacity-60 rounded'}`}><Package size={16} /> <span className={`${mode === 'close' ? 'w-0 overflow-hidden' : 'ml-2 text-xs'}`}>Produtos</span></li></Link>
        <Link href='/services' onClick={() => setActiveLink('services')}><li className={`flex items-center h-10 py-3 px-3 hover:text-black cursor-pointer hover:bg-gray-200 hover:rounded ${activeLink === 'services' && 'bg-gray-300 hover:bg-gray-400 hover:opacity-60 rounded'}`}><Wrench size={16} /> <span className={`${mode === 'close' ? 'w-0 overflow-hidden' : 'ml-2 text-xs'}`}>Serviços</span></li></Link>
        <Link href='/sales' onClick={() => setActiveLink('sales')}><li className={`flex items-center h-10 py-3 px-3 hover:text-black cursor-pointer hover:bg-gray-200 hover:rounded ${activeLink === 'sales' && 'bg-gray-300 hover:bg-gray-400 hover:opacity-60 rounded'}`}><ShoppingCart size={16} /> <span className={`${mode === 'close' ? 'w-0 overflow-hidden' : 'ml-2 text-xs'}`}>Vendas</span></li></Link>
        <Link href='/service-orders' onClick={() => setActiveLink('service-orders')}><li className={`flex items-center h-10 py-3 px-3 hover:text-black cursor-pointer hover:bg-gray-200 hover:rounded ${activeLink === 'service-orders' && 'bg-gray-300 hover:bg-gray-400 hover:opacity-60 rounded'}`}><FileText size={16} /> <span className={`${mode === 'close' ? 'w-0 overflow-hidden' : 'ml-2 text-xs'}`}>Ordens de Serviço</span></li></Link>
        <Link href='/warranties' onClick={() => setActiveLink('warranties')}><li className={`flex items-center h-10 py-3 px-3 hover:text-black cursor-pointer hover:bg-gray-200 hover:rounded ${activeLink === 'warranties' && 'bg-gray-300 hover:bg-gray-400 hover:opacity-60 rounded'}`}><Image src='/ensure.png' alt='' width={16} height={16} /><span className={`${mode === 'close' ? 'w-0 overflow-hidden' : 'ml-2 text-xs'}`}>Termos de Garatias</span></li></Link>
        <Link href='/files' onClick={() => setActiveLink('files')}><li className={`flex items-center h-10 py-3 px-3 hover:text-black cursor-pointer hover:bg-gray-200 hover:rounded ${activeLink === 'files' && 'bg-gray-300 hover:bg-gray-400 hover:opacity-60 rounded'}`}><Archive size={16} /> <span className={`${mode === 'close' ? 'w-0 overflow-hidden' : 'ml-2 text-xs'}`}>Arquivos</span></li></Link>
        <Link href='/financial-releases' onClick={() => setActiveLink('financial-releases')}><li className={`flex items-center h-10 py-3 px-3 hover:text-black cursor-pointer hover:bg-gray-200 hover:rounded ${activeLink === 'financial-releases' && 'bg-gray-300 hover:bg-gray-400 hover:opacity-60 rounded'}`}><BarChartBig size={16} /> <span className={`${mode === 'close' ? 'w-0 overflow-hidden' : 'ml-2 text-xs'}`}>Lançamentos</span></li></Link>
        <Link href='/charges' onClick={() => setActiveLink('charges')}><li className={`flex items-center h-10 py-3 px-3 hover:text-black cursor-pointer hover:bg-gray-200 hover:rounded ${activeLink === 'charges' && 'bg-gray-300 hover:bg-gray-400 hover:opacity-60 rounded'}`}><CircleDollarSign size={16} /> <span className={`${mode === 'close' ? 'w-0 overflow-hidden' : 'ml-2 text-xs'}`}>Cobranças</span></li></Link>
      </ul>
      <li className='w-full flex items-center h-10 p-3 hover:text-black cursor-pointer hover:bg-gray-200 hover:rounded mb-9'><ArrowLeft size={16} /><span className={`${mode === 'close' ? 'w-0 overflow-hidden' : 'ml-2 text-xs'}`}>Sair</span></li>
    </nav>
  )
}
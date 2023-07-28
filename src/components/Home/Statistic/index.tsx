import { Item } from "./Item";
import { Users, Package, Timer, FileText, ShoppingCart } from 'lucide-react';

export function Statistic() {
  return (
    <div className="w-1/4 flex justify-center flex-wrap p-2 gap-2 border rounded border-gray-200 bg-white">
      <h5>Estatísticas do Sistema</h5>
      
      <Item Icon={Users} fill='#4db4f8' stroke="#4db4f8" title="Clientes" value={0} />
      <Item Icon={Package} fill="transparent" stroke="#ffc359" title="Produtos" value={0} />
      <Item Icon={Timer} fill="transparent" stroke="#4cc3c3" title="Serviços" value={0} />
      <Item Icon={FileText} fill="transparent" stroke="#ff6988" title="Ordens" value={0} />
      <Item Icon={'/ensure.png'} fill="transparent" stroke="#b083db70" title="Garantias" value={0} />
      <Item Icon={ShoppingCart} fill="transparent" stroke="#15b698" title="Vendas" value={0} />
    </div>
  )
}
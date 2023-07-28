import { Item } from "./Item";
import { User, Package, Wrench, FileText, ShoppingCart, BarChartBig } from 'lucide-react';

export function Action() {
  return (
    <ul className="flex items-center gap-2 w-full ">
      <Item title="Clientes" shortcut="F1" Icon={User} className="bg-clientCard" />
      <Item title="Produtos" shortcut="F2" Icon={Package} className="bg-productCard" />
      <Item title='Serviços' shortcut='F3' Icon={Wrench} className="bg-serviceCard" />
      <Item title="Ordens" shortcut="F4" Icon={FileText} className="bg-orderCard" />
      <Item title="Vendas" shortcut='F6' Icon={ShoppingCart} className="bg-saleCard" />
      <Item title="Lançamentos" shortcut="F7" Icon={BarChartBig} className="bg-releases" />
    </ul>
  )
}
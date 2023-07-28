import { ProductList } from "./ProductList";
import { CreateProductForm } from "./CreateProductForm";
import { ActionProvider } from "@/contexts/Actions";

export async function Products() {
  return (
    <ActionProvider>
      <ProductList />
      <CreateProductForm />
    </ActionProvider>
  )
}
import { ProductList } from "./ProductList";
import { CreateProductForm } from "./CreateProductForm";
import { ActionProvider } from "@/contexts/Actions";
import { ProductUpdateForm } from "./ProductUpdateForm";

export async function Products() {
  return (
    <ActionProvider>
      <ProductList />
      <CreateProductForm />
      <ProductUpdateForm />
    </ActionProvider>
  )
}
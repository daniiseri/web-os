import { CustomerList } from "./CustomerList";
import { ActionProvider } from "@/contexts/Actions";
import { CreateCustomerForm } from "./CreateCustomerForm";
import { CustomerUpdateForm } from "./CustomerUpdateForm";

export async function Customers() {
return (
    <ActionProvider>
      <CustomerList />
      <CreateCustomerForm />
      <CustomerUpdateForm />
    </ActionProvider>
  )
}
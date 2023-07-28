import { CustomerList } from "./CustomerList";
import { ActionProvider } from "@/contexts/Actions";
import { CreateCustomerForm } from "./CreateCustomerForm";

export async function Customers() {
return (
    <ActionProvider>
      <CustomerList />
      <CreateCustomerForm />
    </ActionProvider>
  )
}
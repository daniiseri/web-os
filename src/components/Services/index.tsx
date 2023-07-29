import { ServiceList } from './ServiceList'
import { ActionProvider } from '@/contexts/Actions'
import { CreateServiceForm } from './CreateServiceForm'
import { ServiceUpdateForm } from './ServiceUpdateForm'

export async function Service() {

  return (
    <ActionProvider>
      <ServiceList />
      <CreateServiceForm />
      <ServiceUpdateForm />
    </ActionProvider>
  )
}
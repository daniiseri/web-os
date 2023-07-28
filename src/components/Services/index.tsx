import { api } from '@/lib/api'
import { ServiceList } from './ServiceList'
import { ActionProvider } from '@/contexts/Actions'
import { CreateServiceForm } from './CreateServiceForm'

async function getServices() {
  try {
    const { data: { services } } = await api.get('/services')

    return { services }
  } catch (err) {
    return { error: err }
  }
}

export async function Service() {
  const { services, error } = await getServices()

  return (
    <ActionProvider>
      <ServiceList services={services} />
      <CreateServiceForm />
    </ActionProvider>
  )
}
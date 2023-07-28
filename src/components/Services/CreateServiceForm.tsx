'use client'

import { useForm } from "@/hooks/useForm";
import { FieldForm } from "../FieldForm";
import { FormEvent, useContext } from "react";
import { ActionContext } from "@/contexts/Actions";
import { Modal } from "../Modal";
import { Close } from "../Close";
import { CREATE_SERVICE_ENDPOINT } from "@/utils/constants";
import axios from "axios";
import { useAppDispatch } from "@/hooks/store";
import { increment } from "@/GlobalRedux/features/servicesSlice";

interface Props {
  name: string
  description: string
  price: number
}

export function CreateServiceForm() {
  const { values, handleChange } = useForm<Props>({ name: '', description: '', price: 0 })
  const { isCreate } = useContext(ActionContext)
  const dispatch = useAppDispatch()

  if (!isCreate()) {
    return;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      const { data: { service, message } } = await axios.post(CREATE_SERVICE_ENDPOINT, values)
      dispatch(increment(service))
      alert(message)
    } catch (err) {
      alert(err)
    }
  }


  return (
    <Modal>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 bg-gray-50 p-4 rounded-md"
      >
        <div className="flex justify-between items-center">
          <h5 className="font-semibold">Cadastro de Serviços</h5>
          <Close />
        </div>
        <FieldForm
          label="Nome"
          id='name'
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <FieldForm
          label="Descrição"
          id='description'
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FieldForm
          label="Preço"
          id='price'
          name="price"
          value={values.price}
          onChange={handleChange}
          isNumber
        />
        <button>CRIAR</button>
      </form>
    </Modal>
  )
}
'use client'

import { useForm } from "@/hooks/useForm";
import { FieldForm } from "../FieldForm";
import { FormEvent, useContext } from "react";
import { ActionContext } from "@/contexts/Actions";
import { Modal } from "../Modal";
import { Close } from "../Close";
import { useAppDispatch } from "@/hooks/store";
import { createCustomer } from "@/GlobalRedux/features/customersSlice";

interface Props {
  name: string
}

export function CreateCustomerForm() {
  const { values, handleChange } = useForm<Props>({ name: '' })
  const { isCreate } = useContext(ActionContext)
  const dispatch = useAppDispatch()

  if (!isCreate()) {
    return;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      await dispatch(createCustomer(values))
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
          <h5 className="font-semibold">Cadastro de Clientes</h5>
          <Close />
        </div>
        <FieldForm
          label="Nome"
          id='name'
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
        <button type="submit">CRIAR</button>
      </form>
    </Modal>
  )
}
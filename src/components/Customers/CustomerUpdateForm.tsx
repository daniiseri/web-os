'use client'

import { selectSelectedCustomer, handleChange, updateCustomer, ICustomer } from "@/GlobalRedux/features/customersSlice"
import { ActionContext } from "@/contexts/Actions"
import { useAppDispatch, useAppSelector } from "@/hooks/store"
import { FormEvent, useContext } from "react"
import { FieldForm } from "../FieldForm"
import { Modal } from "../Modal"
import { Close } from "../Close"

export function CustomerUpdateForm() {
  const { isUpdate } = useContext(ActionContext)
  const selectedCustomer = useAppSelector(selectSelectedCustomer)
  const dispatch = useAppDispatch()

  if (!isUpdate()) {
    return;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    await dispatch(updateCustomer(selectedCustomer as ICustomer))
  }

  return (
    <Modal>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 bg-gray-50 p-4 rounded-md"
      >
        <div className="flex justify-between items-center">
          <h5 className="font-semibold">Atualização de Cliente</h5>
          <Close />
        </div>
        <FieldForm id="name" name="name" value={selectedCustomer?.name} onChange={(e) => dispatch(handleChange(e))} label="Digite o nome do cliente" required />
        <button type="submit">SALVAR</button>
      </form>
    </Modal>
  )
}
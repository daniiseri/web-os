"use client"

import { useSelector } from "react-redux"
import { Close } from "../Close"
import { FieldForm } from "../FieldForm"
import { selectSelectedService, handleChange, updateService, IService } from "@/GlobalRedux/features/servicesSlice"
import { useAppDispatch } from "@/hooks/store"
import { FormEvent, useContext } from "react"
import { ActionContext } from "@/contexts/Actions"
import { Modal } from "../Modal"

export function ServiceUpdateForm() {
  const { isUpdate } = useContext(ActionContext)
  const selectedService = useSelector(selectSelectedService)
  const dispatch = useAppDispatch()

  if (!isUpdate()) {
    return;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    await dispatch(updateService(selectedService as IService))
  }

  return (
    <Modal>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 bg-gray-50 p-4 rounded-md"
      >
        <div className="flex justify-between items-center">
          <h5 className="font-semibold">Atualização de Serviço</h5>
          <Close />
        </div>
        <FieldForm
          id="name"
          name="name"
          value={selectedService?.name}
          onChange={e => dispatch(handleChange(e))}
        />
        <FieldForm
          id="description"
          name="description"
          value={selectedService?.description}
          onChange={e => dispatch(handleChange(e))}
        />
        <FieldForm
          id="price"
          name="price"
          value={selectedService?.price}
          onChange={e => dispatch(handleChange(e))}
          isNumber
        />
        <button type="submit" >SALVAR</button>
      </form>
    </Modal>
  )
}
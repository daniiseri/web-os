'use client'

import { useForm } from "@/hooks/useForm";
import { FieldForm } from "../FieldForm";
import { FormEvent, useContext } from "react";
import { ActionContext } from "@/contexts/Actions";
import { Modal } from "../Modal";
import { Close } from "../Close";
import { useAppDispatch } from "@/hooks/store";
import { createProduct } from "@/GlobalRedux/features/productsSlice";

interface Props {
  description: string
  purchasePrice: number
  salePrice: number
  stock: number
}

export function CreateProductForm() {
  const { values, handleChange } = useForm<Props>({ description: '', purchasePrice: 0, salePrice: 0, stock: 0 })
  const { isCreate } = useContext(ActionContext)
  const dispatch = useAppDispatch()

  if (!isCreate()) {
    return;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      await dispatch(createProduct(values))
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
          <h5 className="font-semibold">Cadastro de Produtos</h5>
          <Close />
        </div>
        <FieldForm
          label="Descrição"
          id='description'
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <div className="flex gap-1">
          <FieldForm
            label="Preço de compra"
            id='purchasePrice'
            name="purchasePrice"
            value={values.purchasePrice}
            onChange={handleChange}
            isNumber
          />
          <FieldForm
            label="Preço de venda"
            id='salePrice'
            name="salePrice"
            value={values.salePrice}
            onChange={handleChange}
            isNumber
          />
        </div>
        <FieldForm
          label="Estoque"
          id='stock'
          name="stock"
          value={values.stock}
          onChange={handleChange}
          isNumber
        />
        <button type="submit">CRIAR</button>
      </form>
    </Modal>
  )
}
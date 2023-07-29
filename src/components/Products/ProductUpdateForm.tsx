'use client'

import { useAppDispatch, useAppSelector } from "@/hooks/store"
import { FieldForm } from "../FieldForm"
import { selectSelectedProduct, handleChange, updateProduct, IProduct } from "@/GlobalRedux/features/productsSlice"
import { Close } from "../Close"
import { FormEvent, useContext } from "react"
import { ActionContext } from "@/contexts/Actions"
import { Modal } from "../Modal"

export function ProductUpdateForm() {
  const { isUpdate } = useContext(ActionContext)
  const selectedProduct = useAppSelector(selectSelectedProduct)
  const dispatch = useAppDispatch()

  if (!isUpdate()) {
    return;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    await dispatch(updateProduct(selectedProduct as IProduct))
  }

  return (
    <Modal>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 bg-gray-50 p-4 rounded-md"
      >
        <div className="flex justify-between items-center">
          <h5 className="font-semibold">Atualização de Produto</h5>
          <Close />
        </div>
        <FieldForm
          id="description"
          name="description"
          value={selectedProduct?.description}
          onChange={e => dispatch(handleChange(e))}
          label="Descrição"
        />
        <div className="flex gap-1">
          <FieldForm
            id="purchasePrice"
            name="purchasePrice"
            value={selectedProduct?.purchasePrice}
            onChange={e => dispatch(handleChange(e))}
            label="Preço de Compra"
          />
          <FieldForm
            id="salePrice"
            name="salePrice"
            value={selectedProduct?.salePrice}
            onChange={e => dispatch(handleChange(e))}
            label="Preço de venda"
          />
        </div>
        <FieldForm
          id="stock"
          name="stock"
          value={selectedProduct?.stock}
          onChange={e => dispatch(handleChange(e))}
          label="Estoque"
        />
        <button type="submit">SALVAR</button>
      </form>
    </Modal>
  )
}
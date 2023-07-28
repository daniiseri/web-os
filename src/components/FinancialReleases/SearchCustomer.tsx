export function SearchCustomer() {
  return (
    <div className="flex flex-col gap-1 w-1/5">
      <label htmlFor="name">Cliente/Fornecedor</label>
      <input
        id='name'
        type="text"
        name='name'
        className="border border-gray-300 text-xs rounded p-[0.375rem]"
      />
    </div>
  )
}
export function Status() {
  return (
    <div className="flex flex-col gap-1 w-1/5">
      <label htmlFor="status">Status</label>
      <select id="status" className="border border-gray-300 rounded p-1 overflow-hidden">
        <option>Todos (Pendente e Pago)</option>
        <option>Pendente</option>
        <option>Pago</option>
      </select>
    </div>
  )
}
export function Type() {
  return (
    <div className='flex flex-col gap-1 w-1/5'>
      <label htmlFor="type">Tipo</label>
      <select id="type" className="border border-gray-300 rounded p-1 overflow-hidden">
        <option>Todos</option>
        <option>Receita</option>
        <option>Despesa</option>
      </select>
    </div>
  )
}
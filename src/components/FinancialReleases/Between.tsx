export function Between() {
  return (
    <div className="w-3/5 flex items-center gap-5">
      <div className="flex flex-col gap-1 w-1/3">
        <label htmlFor="period">Período</label>
        <select id='period' className="border border-gray-300 rounded p-1">
          <option>Dia</option>
          <option>Semana</option>
          <option>Mês</option>
          <option>Ano</option>
        </select>
      </div>
      <div className="flex flex-col gap-1 w-1/3">
        <label htmlFor="from">Vencimento (de)</label>
        <input
          type="date"
          placeholder="Data Inicial"
          className="border border-gray-300 rounded p-1"
        />
      </div>
      <div className="flex flex-col gap-1 w-1/3">
        <label htmlFor="to">Vencimento (até)</label>
        <input
          type="date"
          placeholder="Data Final"
          className="border border-gray-300 rounded p-1"
        />
      </div>
    </div>
  )
}
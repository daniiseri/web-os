import { Month } from "@/components/Month";
import { Dayjs } from "dayjs";
import { Status } from "../../Status";

interface Props {
  formatDate: () => string
  prev: () => void
  next: () => void
  dates: Dayjs[][]
  day: (date: Dayjs) => string
}

export function Schedule({ day, dates, ...props }: Props) {

  return (
    <div className="flex-1 flex flex-col gap-4 border border-gray-200 rounded-lg py-2 px-3 bg-white">
      <h5>Agenda</h5>
      <Month {...props} />
      <div>
        <table className="w-full h-96 ">
          <thead>
            <tr>
              <th className="text-xs border border-gray-200 w-[14.28%]">dom.</th>
              <th className="text-xs border border-gray-200 w-[14.28%]">seg.</th>
              <th className="text-xs border border-gray-200 w-[14.28%]">ter.</th>
              <th className="text-xs border border-gray-200 w-[14.28%]">qua.</th>
              <th className="text-xs border border-gray-200 w-[14.28%]">qui.</th>
              <th className="text-xs border border-gray-200 w-[14.28%]">sex.</th>
              <th className="text-xs border border-gray-200 w-[14.28%]">sáb.</th>
            </tr>
          </thead>
          <tbody>
            {
              dates.map((weeks, rowIndex) => {
                return (
                  <tr key={rowIndex}>
                    {
                      weeks.map((date, colIndex) => {
                        return (
                          <td
                            key={colIndex}
                          className={`border border-gray-300 ${(colIndex === 0 || colIndex === 6) && 'bg-gray-100'} ${((rowIndex === 0 && Number(day(date)) > 7) || (rowIndex >= 4 && Number(day(date)) < 23)) && 'text-gray-300'}`}
                          >
                            {day(date)}
                          </td>
                        )
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <Status.Root>
          <Status.Content hasIcon />
        </Status.Root>
      </div>
    </div>
  )
}
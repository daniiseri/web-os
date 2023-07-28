'use client'

import { Statistic } from "./Statistic";
import { Action } from "./Action";
import { Schedule } from "./Schedule";
import { useDayjs } from "@/hooks/dayjs";

export function Home() {
  const { formatDate, next, prev, monthDays, day } = useDayjs();
  return (
    <>
      <Action />
      <div className="flex gap-3 mt-4">
        <Schedule
          formatDate={formatDate}
          next={next}
          prev={prev}
          dates={monthDays}
          day={day}
        />
        <Statistic />
      </div>
    </>
  )
}
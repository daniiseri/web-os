import dayjs from 'dayjs';
import weekdayPlugin from 'dayjs/plugin/weekday';
import ptBr from 'dayjs/locale/pt-br';

import { useState } from 'react';

dayjs.locale(ptBr)

dayjs.extend(weekdayPlugin);


export function useDayjs() {
  const [date, setDate] = useState<dayjs.Dayjs>(dayjs().startOf('month'));
  const weekdays = getWeekdays();
  const monthDays = getMonthDays();


  function startWeek() {
    switch (dayjs(date).format('dddd')) {
      case weekdays[0]: return 1;
      case weekdays[1]: return -1;
      case weekdays[2]: return -2;
      case weekdays[3]: return -3;
      case weekdays[4]: return -4;
      case weekdays[5]: return -5;
      case weekdays[6]: return -6;
      default: return 1;
    }
  }

  function getWeekdays() {
    const weekdays = [];
    const currentDate = dayjs().startOf('week');

    for (let i = 0; i < 7; i++) {
      weekdays.push(currentDate.add(i, 'day').format('dddd'));
    }

    return weekdays;
  }

  function formatDate() {
    return dayjs(date).format("MMMM[ de ]YYYY")
  }

  function next() {
    const currentDate = date.add(1, 'month');
    setDate(currentDate)
  }

  function prev() {
    const currentDate = date.subtract(1, 'month');
    setDate(currentDate)
  }

  function getMonthDays() {
    let dates = [];
    let start = startWeek();

    for(let i = 0; i < 6; i++){
      const newDates = [];

      for(let j = 0; j < 7; j++){
        const day = start + j;
        const newDate = date.add(day, 'day');
        newDates.push(newDate);
      }

      start += 7;
      dates.push(newDates);
    }
    return dates
  };

  function day(date: dayjs.Dayjs) {
    return date.format("DD")
  }

  return {
    formatDate,
    date,
    setDate,
    next,
    prev,
    monthDays,
    day
  }
}
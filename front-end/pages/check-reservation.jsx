import Title from '@components/common/Title';
import UserTable from '@components/reservation/UserTable';
import WeekPickCalender from '@components/reservation/WeekPickCalender';
import React, { useRef, useState } from 'react';
import { Calendar, DateObject } from 'react-multi-date-picker';

const checkReservation = () => {
  const [value, setValue] = useState(null);
  return (
    <div>
      <Title title='예약확인하기' />
      <div className='flex justify-center my-4'>
        <Calendar
          showOtherDays
          value={value}
          onChange={e => {
            const clickDay = new Date(e[0].format());
            const offset = (clickDay.getDay() + 6) % 7;

            const weekStart = new Date(clickDay);
            weekStart.setDate(clickDay.getDate() - offset);
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekStart.getDate() + 6);

            setValue([weekStart, weekEnd]);
          }}
          range
        />
      </div>
      <div className='flex overflow-x-scroll'>
        <UserTable />
        <UserTable />
        <UserTable />
        <UserTable />
        <UserTable />
        <UserTable />
        <UserTable />
      </div>
    </div>
  );
};

export default checkReservation;

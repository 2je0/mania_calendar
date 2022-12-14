import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import Title from '@components/common/Title';
import { Calendar } from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import { Button } from '@mui/material';
const reservation = () => {
  const [value, setValue] = useState(null);
  const today = new Date();
  const offset = (today.getDay() + 6) % 7;

  const minDate = new Date(today);
  minDate.setDate(today.getDate() - offset);
  const maxDate = new Date(minDate);
  maxDate.setDate(minDate.getDate() + 6);

  return (
    <Container>
      <Title title='예약하기' />
      <div className='flex justify-center my-4'>
        <Calendar
          value={value}
          onChange={setValue}
          multiple
          sort
          plugins={[<DatePanel />]}
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
      <div className='flex w-full justify-end px-8'>
        <button class='bg-blue-500 hover:bg-blue-700 text-white  py-1 px-4 rounded'>
          예약
        </button>
      </div>
    </Container>
  );
};

export default reservation;
const Container = tw.div`
`;

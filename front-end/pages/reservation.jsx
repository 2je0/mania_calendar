import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import Title from '@components/common/Title';
import { Calendar } from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import { Button, Stack } from '@mui/material';
const reservation = () => {
  const [value, setValue] = useState(null);
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
        />
      </div>
      <div className='flex w-full justify-end px-6'>
        <Button variant='outlined'>예약</Button>
        <Stack spacing={2} direction='row'>
          <Button variant='contained' disableElevation>
            Disable elevation
          </Button>
        </Stack>
      </div>
    </Container>
  );
};

export default reservation;
const Container = tw.div`
`;

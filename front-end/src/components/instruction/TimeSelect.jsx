import Title from '@components/common/Title';
import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
const TimeSelect = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <Title title='Select Time' />
      <DatePicker
        className='mx-auto'
        value={value}
        onChange={setValue}
        format='MM/DD/YYYY HH:mm'
        plugins={[<TimePicker position='bottom' />]}
      />
      <div>{value?.toDate?.().toString()}</div>
      <div className='flex w-full justify-end px-8'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white  py-1 px-4 rounded'>
          신청하기
        </button>
      </div>
    </div>
  );
};

export default TimeSelect;

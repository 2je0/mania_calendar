import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import RegisterClass from '@components/instruction/RegisterClass';
import TimeSelect from '@components/instruction/TimeSelect';
import CheckStudents from '@components/instruction/CheckStudents';
const instruction = () => {
  const [alignment, setAlignment] = React.useState('강습신청');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <ToggleButtonGroup
        className='m-4'
        color='primary'
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label='instruction-button'>
        <ToggleButton value='강습신청'>강습신청</ToggleButton>
        <ToggleButton value='강습수락'>강습수락</ToggleButton>
      </ToggleButtonGroup>
      {alignment === '강습신청' ? (
        <>
          <RegisterClass />
          <TimeSelect />
        </>
      ) : (
        <CheckStudents />
      )}
    </>
  );
};

export default instruction;

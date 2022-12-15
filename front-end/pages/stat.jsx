import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Title from '@components/common/Title';
import StatTable from '@components/stat/StatTable';

const stat = () => {
  return (
    <>
      <Title title='전투력 측정' />
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'>
        <TextField id='standard-basic' label='Standard' variant='standard' />
      </Box>
      <StatTable />
    </>
  );
};

export default stat;

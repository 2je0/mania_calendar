import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const Title = ({ title, desc }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          {title}
        </Typography>
        <Typography color='text.secondary'>{desc || ''}</Typography>
      </CardContent>
    </Box>
  );
};

export default Title;

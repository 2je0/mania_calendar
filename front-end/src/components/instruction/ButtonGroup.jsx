import * as React from 'react';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import tw from 'tailwind-styled-components';
const classList = [
  ['처음', '사이드슬립', '팬듈럼'],
  ['비기너턴', '너비스턴', '카빙'],
  ['테크니컬라이딩', '그라운드트릭'],
  ['파크', '지빙', '기타'],
];
export default function ButtonGroup() {
  const [classes, setClasses] = React.useState(() => []);

  const handleClass = (event, newClass) => {
    setClasses(newClass);
  };

  return (
    <div>
      <Paper
        className='flex flex-col mx-auto py-2'
        elevation={0}
        sx={{
          border: theme => `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
        }}>
        {/* <Divider flexItem orientation='vertical' sx={{ mx: 0.5, my: 1 }} /> */}

        {classList.map((set, index) => {
          return (
            <ToggleButtonGroup
              key={index}
              className=' mx-auto'
              color='primary'
              value={classes}
              onChange={handleClass}
              aria-label='instruction-button'>
              {set.map(one => {
                return (
                  <ToggleButton key={one} value={one}>
                    {one}
                  </ToggleButton>
                );
              })}
            </ToggleButtonGroup>
          );
        })}
      </Paper>
    </div>
  );
}
const BtnBox = tw.div`
flex justify-center
`;

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen ', 159, 6.0, 24),
  createData('Ice ', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
];

export default function AcccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} aria-label='caption table'>
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell width={150}>이름</TableCell>
            <TableCell align='right'>출석일</TableCell>
            <TableCell align='right'>강습횟수</TableCell>
            <TableCell align='right'>패널티</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.calories}</TableCell>
              <TableCell align='right'>{row.fat}</TableCell>
              <TableCell align='right'>{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

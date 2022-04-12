import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(date, start, end) {
//   return { date, start, end };
// }

// const rows = [
//   createData('09/04/2022', '08:00', '12:00'),
//   createData('10/04/2022', '13:00', '17:00')
// ];

function DenseTable(props) {
  const { appointments } = props;

  const formatDate = (date) => {
    const dateFormat = new Date(date).toLocaleDateString();

    return dateFormat;
  }

  const formatTime = (date) => {
    const hoursFormat = new Date(date).getUTCHours();
    const minutesFormat = new Date(date).getUTCMinutes();

    return `${hoursFormat}:${minutesFormat}`;
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 5 }}>
      <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Data</TableCell>
            <TableCell align="center">Entrada</TableCell>
            <TableCell align="center">Saída</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((ap) => (
            <TableRow
              key={ap._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" align="left" scope="row">
                {formatDate(ap.start)}
              </TableCell>
              <TableCell align="center">{formatTime(ap.start)}</TableCell>
              <TableCell align="center">{formatTime(ap.end)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DenseTable;
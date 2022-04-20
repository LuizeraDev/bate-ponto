import { Table, TableBody, TableFooter, TablePagination, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import moment from 'moment';
import { useState } from 'react';

function DenseTable(props) {
  const { appointments } = props;

  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const formatDate = (date) => {
    const fullDate = moment.utc(date).format('DD/MM/YYYY');

    return fullDate;
  }

  const formatTime = (date) => {
    const fullTime = moment.utc(date).format('HH:mm');

    return fullTime !== 'Invalid date' ? fullTime : '00:00';
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Data</TableCell>
            <TableCell align="center">Entrada</TableCell>
            <TableCell align="center">Saída</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .sort(function (a, b) {
              return moment(a.start) - moment(b.end);
            })
            .map((ap) => (
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
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[rowsPerPage]}
              count={appointments.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default DenseTable;
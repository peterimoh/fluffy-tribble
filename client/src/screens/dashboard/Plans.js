import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Plans = ({ plans }) => {
 const [deposit, setDeposit] = useState('')
 const [due, setDue] = useState('')
    const {pending, running} = plans
  return (
    <React.Fragment>
      <div className='container'>
        <div className='col-lg-12'>
          <h4>Pending Plan</h4>
          <div className='row justify-content-center'>
            <TableContainer>
              <Table sx={{ minWidth: 800 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Reference ID</TableCell>
                    <TableCell align='center'>Status</TableCell>
                    <TableCell align='center'>Plan</TableCell>
                    <TableCell align='center'>Deposit Date</TableCell>
                    <TableCell align='center'>Due Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pending.length > 0 ? (
                    pending.map((x) => {
                        const { _id, status, plan, depositDate, dueDate } = x;
                        //  const today = new Date(depositDate);
                        //  const date =
                        //    today.getFullYear() +
                        //    '-' +
                        //    (today.getMonth() + 1) +
                        //    '-' +
                        //    today.getDate();
                      return (
                        <TableRow
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        key={_id}>
                          <TableCell>{_id}</TableCell>
                          <TableCell>
                            <button className='bg-success badge badge-success p-2'>
                              {status}
                            </button>
                          </TableCell>
                          <TableCell>{plan}</TableCell>
                          <TableCell>{depositDate}</TableCell>
                          <TableCell>{dueDate}</TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableCell>
                      There are no pending plans at the moment
                    </TableCell>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>{' '}
        <br />
        <br />
        <br />
        <div className='col-lg-12'>
          <h4>Running Plan</h4>
          <div className='row justify-content-center'>
            <TableContainer>
              <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Reference ID</TableCell>
                    <TableCell align='center'>Status</TableCell>
                    <TableCell align='center'>Plan</TableCell>
                    <TableCell align='center'>Deposit Date</TableCell>
                    <TableCell align='center'>Due Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {running.length > 0 ? (
                    running.map((x) => {
                      const { _id, status, plan, depositDate, dueDate } = x;
                      return (
                        <TableRow
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell>{_id}</TableCell>
                          <TableCell>
                            <button className='bg-success badge badge-success p-2'>
                              {status}
                            </button>
                          </TableCell>
                          <TableCell>{plan}</TableCell>
                          <TableCell>{depositDate}</TableCell>
                          <TableCell>{dueDate}</TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableCell>
                      There are no running plans at the moment
                    </TableCell>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Plans;

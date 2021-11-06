import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getProduct } from '../../actions/productAction';

export const Product = () => {
  const products = useSelector((state) => state.products);
  const { loading, data, error } = products;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  const host = 'http://127.0.0.1:8080/';

  return (
    <section id='product-list'>
      <div className='container'>
        {data && data.length < 1 ? (
          <center>
            <div className='m-5'>There are no products at the moment</div>
          </center>
        ) : (
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'></TableCell>

                  <TableCell align='center'>
                    <strong>Name</strong>{' '}
                  </TableCell>
                  <TableCell align='center'>
                    <strong>Raid</strong>
                  </TableCell>
                  <TableCell align='center'>
                    <strong>Price</strong>
                  </TableCell>
                  <TableCell align='center'>
                    <strong>Features</strong>
                  </TableCell>
                  <TableCell align='center'></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.map((x) => {
                    const {
                      _id,
                      name,
                      category,
                      price,
                      CPU,
                      RAM,
                      Raid,
                      IP,
                      storage,
                      speed,
                      thumb,
                    } = x;
                    return (
                      <TableRow
                        key={_id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell align='center'>
                          <img
                            src={host + thumb}
                            alt={name}
                            height='100'
                            width='100'
                            style={{ borderRadius: '5px' }}
                          />
                        </TableCell>
                        <TableCell align='center' component='th' scope='row'>
                          {name}
                        </TableCell>
                        <TableCell align='center'>{Raid}</TableCell>
                        <TableCell align='center'>
                          Starting at ${price}
                        </TableCell>
                        <TableCell align='center'>
                          CPU: {CPU}, RAM: {RAM}, IP: {IP}, Storage: {storage},
                          Speed: {speed}
                        </TableCell>
                        <TableCell align='center'>
                          <Link
                            to={`/product/${_id}`}
                            className='btn btn-primary'
                            style={{ background: '#000', border: '0' }}
                          >
                            Configure
                          </Link>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </section>
  );
};

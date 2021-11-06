import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import $ from 'jquery';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Navbar from '../../utility/navbar/Navbar';
import { addToCart, removeFromCart } from '../../actions/cartAction';
import Footerr from '../../utility/footer/Footerr';

const Cart = () => {
  const { id } = useParams();

  const cart = useSelector((state) => state.cart);
  const loginAuth = useSelector((state) => state.LoginAuth);
  const dispatch = useDispatch();

  const { cartItem } = cart;
  const { isAuth } = loginAuth;

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus');
  });

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id));
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      {cartItem.length > 0 ? (
        <section className='top-header container'>
          <TableContainer>
            <Table sx={{ minWidth: 550 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'></TableCell>

                  <TableCell align='center'>
                    <strong>Product</strong>{' '}
                  </TableCell>
                  <TableCell align='center'>
                    <strong>Price</strong>
                  </TableCell>
                  <TableCell align='center'>
                    <strong>Action</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItem &&
                  cartItem.map((x, i) => {
                    const host = 'http://127.0.0.1:8080/';
                    const { product, image, price, name } = x;
                    return (
                      <TableRow
                        key={i}
                        sx={{
                          '&:last-child td, &:last-child th': {
                            border: 0,
                          },
                        }}
                      >
                        <TableCell align='center'>
                          <img
                            src={host + image}
                            alt={name}
                            height='100'
                            width='100'
                            style={{ borderRadius: '5px' }}
                          />
                        </TableCell>
                        <TableCell align='center' component='th' scope='row'>
                          {name}
                        </TableCell>
                        <TableCell align='center'>${price}</TableCell>
                        <TableCell align='center'>
                          <button
                            onClick={() => removeHandler(product)}
                            className='btn btn-danger m-2'
                            style={{
                              border: '0',
                            }}
                          >
                            remove
                          </button>
                          {isAuth ? (
                            <button
                              // onClick={() => removeHandler(product)}
                              className='btn btn-primary m-2'
                              style={{
                                border: '0',
                              }}
                            >
                              Buy now
                            </button>
                          ) : (
                            <button
                              className='btn btn-secondary m-2'
                              disabled
                              style={{
                                border: '0',
                              }}
                            >
                              Log in to pay
                            </button>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      ) : (
        <div className='top-header'>
          <center>Cart is Empty</center>
        </div>
      )}

      <Footerr />
    </React.Fragment>
  );
};

export default Cart;

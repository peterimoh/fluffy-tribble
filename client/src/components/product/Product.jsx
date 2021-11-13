import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getProduct } from '../../actions/productAction';
import './filter.css';

export const Product = () => {
  const [productData, setProduct] = useState([]);
  const products = useSelector((state) => state.products);
  const { loading, data, error } = products;

  const dispatch = useDispatch();

  const filterStatus = (key, value) => {
    if (data)
      return setProduct(data.filter((element) => element[key] == value));
  };

  useEffect(() => {
    dispatch(getProduct());

    if (data) {
      setProduct(data);
    }
  }, []);
  console.log(productData);
  const host = 'http://127.0.0.1:8080/';

  return (
    <>
      <section class='cd-main-content sec-up wow animated fadeInUp fast'>
        <div class='cd-filter' id='filter'>
          <div class='container'>
            <div class='sec-main pb-5 sec-bg1'>
              <div class='plans badge feat bg-pink'>filter</div>
              <div class='row'>
                <a href='#0' class='cd-close'>
                  <i class='fas fa-long-arrow-alt-left'></i>
                </a>

                {/* <div class='col-md-6'>
                  <div class='cd-filter-block'>
                    <h4>Location</h4>
                    <div class='cd-filter-content cd-select'>
                      <select class='select-filter'>
                        <option value='all'>Select Datacenter</option>
                        <option value='.data1'>New York</option>
                        <option value='.data2'>Montreal</option>
                        <option value='.data3'>Portugal</option>
                        <option value='.data4'>London</option>
                        <option value='.data5'>Moscow</option>
                        <option value='.data6'>Hong Kong</option>
                        <option value='.data7'>Singapure</option>
                      </select>
                    </div>
                  </div>
                </div> */}
                <div class='col-md-6'>
                  <div class='cd-filter-block checkbox-group'>
                    <h4>CPU Cores</h4>
                    <ul class='cd-filter-content cd-filters list'>
                      <li></li>
                      <li>
                        <button
                          onClick={() => filterStatus('CPU', '4 GHZ')}
                          className='btn btn-outline-success'
                          value='.cores4'
                          type='checkbox'
                          id='checkbox2'
                        >
                          4
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => filterStatus('CPU', '6 GHZ')}
                          className='btn btn-outline-success'
                          value='.cores6'
                          type='checkbox'
                          id='checkbox3'
                        >
                          6
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => filterStatus('CPU', '8 GHZ')}
                          className='btn btn-outline-success'
                          value='.cores8'
                          type='checkbox'
                          id='checkbox4'
                        >
                          8
                        </button>
                        {/* <label class="checkbox-label" for="checkbox4">8</label> */}
                      </li>
                      <li>
                        <button
                          onClick={() => filterStatus('CPU', '12 GHZ')}
                          className='btn btn-outline-success'
                          value='.cores12'
                          type='checkbox'
                          id='checkbox5'
                        >
                          12
                        </button>
                        {/* <label class="checkbox-label" for="checkbox5">12</label> */}
                      </li>
                      <li>
                        <button
                          onClick={() => filterStatus('CPU', '16 GHZ')}
                          className='btn btn-outline-success'
                          value='.cores16'
                          type='checkbox'
                          id='checkbox6'
                        >
                          16
                        </button>
                        {/* <label class="checkbox-label" for="checkbox6">16</label> */}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class='col-md-6'>
                  <div class='cd-filter-block checkbox-group'>
                    <h4>RAM</h4>
                    <ul class='cd-filter-content cd-filters list'>
                      <li></li>
                      <li>
                        <button
                          onClick={() => filterStatus('RAM', '5gb')}
                          className='btn btn-outline-success'
                          value='.cores4'
                          type='checkbox'
                          id='checkbox2'
                        >
                          5 GB
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => filterStatus('RAM', '32gb')}
                          className='btn btn-outline-success'
                          value='.cores6'
                          type='checkbox'
                          id='checkbox3'
                        >
                          32 GB
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => filterStatus('RAM', '64gb')}
                          className='btn btn-outline-success'
                          value='.cores8'
                          type='checkbox'
                          id='checkbox4'
                        >
                          64 GB
                        </button>
                        {/* <label class="checkbox-label" for="checkbox4">8</label> */}
                      </li>
                      <li>
                        <button
                          onClick={() => filterStatus('RAM', '124gb')}
                          className='btn btn-outline-success'
                          value='.cores12'
                          type='checkbox'
                          id='checkbox5'
                        >
                          124 GB
                        </button>
                        {/* <label class="checkbox-label" for="checkbox5">12</label> */}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class='col-md-6'>
                  <div class='cd-filter-block checkbox-group'>
                    <h4>STORAGE</h4>
                    <ul class='cd-filter-content cd-filters list'>
                      <li></li>
                      <li>
                        <button
                          onClick={() => filterStatus('storage', '5 ssd')}
                          className='btn btn-outline-success'
                          value='.cores4'
                          type='checkbox'
                          id='checkbox2'
                        >
                          5 SSD
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => filterStatus('storage', '32 ssd')}
                          className='btn btn-outline-success'
                          value='.cores6'
                          type='checkbox'
                          id='checkbox3'
                        >
                          32 SSD
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => filterStatus('storage', '64 ssd')}
                          className='btn btn-outline-success'
                          value='.cores8'
                          type='checkbox'
                          id='checkbox4'
                        >
                          64 SSD
                        </button>
                        {/* <label class="checkbox-label" for="checkbox4">8</label> */}
                      </li>
                      <li>
                        <button
                          onClick={() => filterStatus('storage', '128 ssd')}
                          className='btn btn-outline-success'
                          value='.cores12'
                          type='checkbox'
                          id='checkbox5'
                        >
                          128 SSD
                        </button>
                        {/* <label class="checkbox-label" for="checkbox5">12</label> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='product-list'>
        <div className='container'>
          {data && data.length < 1 ? (
            <center>
              <div className='m-5'>There are no products at the moment</div>
            </center>
          ) : (
            <TableContainer className='mb-5'>
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
                  {productData && productData.length > 0 ? (
                    productData.map((x) => {
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
                            CPU: {CPU}, RAM: {RAM}, IP: {IP}, Storage: {storage}
                            , Speed: {speed}
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
                    })
                  ) : (
                    <TableRow className='mb-4'>
                      <center>
                        <strong>No Match Found</strong>
                      </center>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </section>
    </>
  );
};

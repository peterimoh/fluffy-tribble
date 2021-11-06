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

export const Product = () => {

  const [productData, setProduct] = useState([])
  const products = useSelector((state) => state.products);
  const { loading, data, error } = products;


  const dispatch = useDispatch();

  const filterStatus = (key, value) => {
    if (data) return setProduct(data.filter((element) => element[key] == value))
  };

  useEffect(() => {
    dispatch(getProduct());
    if(data){
      setProduct(data)
      console.log(products);
    }
  }, []);
<<<<<<< HEAD
  const host = 'http://127.0.0.1:8080/';
=======
   const host = 'https://pure-bayou-81849.herokuapp.com/';
>>>>>>> origin/filter

  return (
    <>
     <section class="cd-main-content sec-up wow animated fadeInUp fast">
    <div class="cd-filter">
     
        <div class="container">
          <div class="sec-main pb-5 sec-bg1">
            <div class="plans badge feat bg-pink">filter</div>
            <div class="row">
              <a href="#0" class="cd-close"><i class="fas fa-long-arrow-alt-left"></i></a>
              <div class="col-md-6">
                <div class="cd-filter-block">
                  <h4>Choose Server</h4>
                  <ul class="radio-group radios-filter cd-filter-content list">
                    <li>
                      <button value="all" type="radio" name="radioButton" id="radio1" checked>
                      All
                        </button>
                      {/* <label class="radio-label" for="radio1"> </label> */}
                    </li>
                    <li>
                      <button value=".linux" type="radio" name="radioButton" id="radio2">
                        Linux
                        </button>
                      {/* <label class="radio-label" for="radio2"></label> */}
                    </li>
                    <li>
                      <button value=".windows" type="radio" name="radioButton" id="radio3">
                        Windows
                        </button>
                      {/* <label class="radio-label" for="radio3"></label> */}
                    </li>
                    <li>
                      <button value=".managed" type="radio" name="radioButton" id="radio4">
                        Managed
                        </button>
                      {/* <label class="radio-label" for="radio4"></label> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cd-filter-block">
                  <h4>Location</h4>
                  <div class="cd-filter-content cd-select">
                    <select class="select-filter">
                      <option value="all">Select Datacenter</option>
                      <option value=".data1">New York</option>
                      <option value=".data2">Montreal</option>
                      <option value=".data3">Portugal</option>
                      <option value=".data4">London</option>
                      <option value=".data5">Moscow</option>
                      <option value=".data6">Hong Kong</option>
                      <option value=".data7">Singapure</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cd-filter-block checkbox-group">
                  <h4>CPU Cores</h4>
                  <ul class="cd-filter-content cd-filters list">
                    <li>
                      <button onClick={()=>filterStatus("CPU", "56 GHZ")} class="filter" value=".cores2" type="checkbox" id="checkbox1">
                        56
                        </button>
                      {/* <label class="checkbox-label" for="checkbox1">2</label> */}
                    </li>
                    <li>
                      <button onClick={()=>filterStatus("CPU", "4 GHZ")} class="filter" value=".cores4" type="checkbox" id="checkbox2">
                        4
                        </button>
                      {/* <label class="checkbox-label" for="checkbox2">4</label> */}
                    </li>
                    <li>
                      <button onClick={()=>filterStatus("CPU", "6 GHZ")} class="filter" value=".cores6" type="checkbox" id="checkbox3">
                        6
                        </button>
                      {/* <label class="checkbox-label" for="checkbox3">6</label> */}
                    </li>
                    <li>
                      <button onClick={()=>filterStatus("CPU", "8 GHZ")} class="filter" value=".cores8" type="checkbox" id="checkbox4">
                        8
                        </button>
                      {/* <label class="checkbox-label" for="checkbox4">8</label> */}
                    </li>
                    <li>
                      <button onClick={()=>filterStatus("CPU", "12 GHZ")} class="filter" value=".cores12" type="checkbox" id="checkbox5">
                        12
                        </button>
                      {/* <label class="checkbox-label" for="checkbox5">12</label> */}
                    </li>
                    <li>
                      <button onClick={()=>filterStatus("CPU", "16 GHZ")} class="filter" value=".cores16" type="checkbox" id="checkbox6">
                        16
                        </button>
                      {/* <label class="checkbox-label" for="checkbox6">16</label> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cd-filter-block">
                  <h4>RAM</h4>
                  <div class="cd-filter-content cd-filters list">
                    <datalist>
                    <option value="0"> 16</option>
                    <option value="1"> 32</option>
                    <option value="2"> 64</option>
                    <option value="3"> 96</option>
                    <option value="4"> 128</option>
                    <option value="5"> 256</option>
                    </datalist>
                    <div class="range-slider">
                      <input name="minSize" class="range-slider-input tooltip-parent" type="range" min="0" max="5" value="0" data-list="sizeLegend"/>
                    </div>
                    <div class="range-slider">
                      <input name="maxSize" class="range-slider-input tooltip-parent" type="range" min="0" max="5" value="5" data-list="sizeLegend"/>
                    </div>
                  </div>
                  {/* <div class="search-disabled">
                    <input type="text" class="input" data-ref="input-search" placeholder="Enter a domain extension (.com)"/>
                  </div> */}
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
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'></TableCell>

<<<<<<< HEAD
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
=======
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
              {productData &&
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
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                      <TableCell align='center'>Starting at ${price}</TableCell>
                      <TableCell align='center'>
                        CPU: {CPU}, RAM: {RAM}, IP: {IP}, Storage: {storage},
                        Speed: {speed}
                      </TableCell>
                      <TableCell align='center'>
                        <button
                          className='btn btn-primary'
                          style={{ background: '#000', border: '0' }}
                        >
                          Configure
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
>>>>>>> origin/filter
      </div>
    </section>

    </>
  );
};

var prod  = [
  {
  _id: "61845cc4f8f2480af1665ec4",
  name: "vps 4",
  category: "cloud",
  price: 600,
  CPU: "16 GHZ",
  RAM: "32gb",
  Raid: "hardware 3",
  IP: "Geolocate",
  storage: "128 ssd",
  speed: "unmetered",
  thumb: "public/api/static/productImg/1636064452405-bill-wegener-LqOO5Ko0zSo-unsplash.jpg",
  __v: 0,
  },
  {
  _id: "61845d1ef8f2480af1665ec6",
  name: "vps 1",
  category: "dedicated",
  price: 1500,
  CPU: "34 GHZ",
  RAM: "128gb",
  Raid: "hardware 4",
  IP: "Geolocate",
  storage: "128 ssd",
  speed: "unmetered",
  thumb: "public/api/static/productImg/1636064542638-zlidee.com_.png",
  __v: 0,
  },
  {
  _id: "61845ed8f8f2480af1665ec8",
  name: "Toshiba",
  category: "reseller",
  price: 430,
  CPU: "56 GHZ",
  RAM: "13gb",
  Raid: "hardware 4",
  IP: "Geolocate",
  storage: "128 ssd",
  speed: "unmetered",
  thumb: "public/api/static/productImg/1636064984075-zlidee.com_.png",
  __v: 0,
  },
  {
  _id: "61845f14f8f2480af1665eca",
  name: "Innoson",
  category: "reseller",
  price: 4300,
  CPU: "26 GHZ",
  RAM: "1340gb",
  Raid: "hardware 4",
  IP: "Geolocate",
  storage: "5000 ssd",
  speed: "unmetered",
  thumb: "public/api/static/productImg/1636065044509-zlidee.com_.png",
  __v: 0,
  },
  ]

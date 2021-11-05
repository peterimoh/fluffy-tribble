import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../actions/productAction';
import Footerr from '../../utility/footer/Footerr';
import Navbar from '../../utility/navbar/Navbar';

const SingleProduct = (props) => {
  const productDetail = useSelector((state) => state.productDetail);
  const { response } = productDetail;
  const dispatch = useDispatch();

  const [redirect, setRedirect] = useState(false)

  const { id } = props.match.params;
  console.log(id);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  const host = 'http://127.0.0.1:8080/';

  const handleAddToCart = () => {
    setRedirect(true)
  }

  if(redirect) return(<Redirect to={`/cart/${id}`} />)

  return (
    <React.Fragment>
      <Navbar />

      <section className='top-header'>
        <div className='container'>
          <div
            className='productDetails d-flex justify-content-center'
            style={{ flexWrap: 'wrap' }}
          >
            {response ? (
              <>
                <div className='img'>
                  <img
                    src={host + response.thumb}
                    alt={response.name}
                    height='500'
                    width='500'
                    style={{ borderRadius: '5px' }}
                    className='img-fluid'
                  />
                </div>
                <ul>
                  <li>Name: {response.name} </li>
                  <li>CPU: {response.CPU} </li>
                  <li>RAM: {response.RAM} </li>
                  <li>Raid: {response.Raid} </li>
                  <li>IP: {response.IP} </li>
                  <li>Storage: {response.storage} </li>
                  <li>Speed: {response.speed} </li>
                  <button className='btn btn-success' onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                </ul>
              </>
            ) : (
              <div>Product does not exist</div>
            )}
          </div>
        </div>
      </section>

      <Footerr />
    </React.Fragment>
  );
};

export default SingleProduct;

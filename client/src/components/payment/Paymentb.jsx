import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DropIn from 'braintree-web-drop-in-react';
import { getClientToken, processPayment } from '../../actions/planAction';

const Paymentb = (props) => {
  const LoginAuth = useSelector((state) => state.LoginAuth);
  const GetToken = useSelector((state) => state.GetToken);
  const PaymentInit = useSelector((state) => state.PaymentInit);
  const dispatch = useDispatch();

  const [clientToken, setClientToken] = useState(null);

  let instancee;
  const { tokenLoading, token } = GetToken;
  const { isAuth, response } = LoginAuth;

  useEffect(() => {
    if (response) {
      const { _id } = response.data.user;
      dispatch(getClientToken(_id));
    }
  }, []);

  useEffect(() => {
    if (token) {
      const { clientToken } = token.response;
      setClientToken(clientToken);
    }
  }, [token]);

  var amount = props.details ? props.details.data.Sale_price : 0;

  useEffect(() => {
    if (response && clientToken) {
      const { _id } = response.data.user;
      dispatch(getClientToken(_id, clientToken));
    }
  }, []);

  const showbtdropIn = () => {
    return (
      <div>
        {!isAuth ? (
          <div>
            <strong>Log in to Purchase a Plan</strong>
            <br />
            <Link className='btn btn-primary' to='/login'>
              Log in
            </Link>
          </div>
        ) : (
          <React.Fragment>
            <DropIn
              onInstance={(instance) => (instancee = instance)}
              options={{
                authorization: token ? token.response.clientToken : null,
                googlePay: true,
                paypal: true,
                applePay: true,
              }}
              // preselectVaultedPaymentMethod={true}
              // onPaymentMethodRequestable={true}
            />
            <button
              className='btn btn-success btn-outline w-100'
              onClick={() => onPurchase(instancee)}
            >
              Pay now
            </button>
          </React.Fragment>
        )}
      </div>
    );
  };

  const onPurchase = (instancee) => {
    let nonce;
    let getNonce = instancee.requestPaymentMethod().then((data) => {
      nonce = data.nonce;
      const paymentData = {
        paymentMethodNonce: nonce,
        amount: amount,
        userId: response.data.user._id,
        package: props.package
      };
      dispatch(
        processPayment(response.data.user._id, clientToken, paymentData)
      );
    });
  };

  return (
    <div className='col'>
      <h5>Your bill is ${amount}</h5>
      {showbtdropIn()}
    </div>
  );
};

export default Paymentb;

import React, { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../actions/asyncAction';
// import './activate.css';

const Activate = (props) => {
  const Activation = useSelector((state) => state.Activation);
  const { error, success, showButton, msg } = Activation;
  console.log(Activation);
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    username: '',
    first_name: '',
    last_name: '',
    token: '',
    error: '',
    password: '',
    email: '',
    profile: '',
  });

  
  const { username, first_name, last_name, token, password, email } = value;

  useEffect(() => {
    let tokenReturn = props.location.search;
    const token = tokenReturn.split('?')[1];

    if (token) {
      const data = jwt.decode(token);
      const { username, first_name, last_name, email, password } = data;
      setValue({
        ...value,
        username,
        first_name,
        last_name,
        token,
        password,
        email,
      });
    }
  }, [props]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue({ ...value });
    console.log(token);
    dispatch(signUp(token));
  };

  return (
    <Wrapper>
      <div className='container'>
        {success ? (
          <center>
            <div style={{ color: 'green', height: '30vh' }}>{msg}</div>
          </center>
        ) : null}
        {error ? (
          <center>
            <div style={{ color: 'red', height: '30vh' }}>{error}</div>
          </center>
        ) : null}
        {showButton ? (
          <form>
            <input type='text' hidden name='token' value={token} />

            <h3>Hey {username}, ready to activate your account?</h3>
            <br />
            <button className='btn' onClick={handleSubmit} type='submit'>
              Activate Account
            </button>
          </form>
        ) : null}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 20px;
`;

export default Activate;

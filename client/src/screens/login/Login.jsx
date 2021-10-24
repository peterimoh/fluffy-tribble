import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Login as LoginAuthenticate } from '../../actions/asyncAction';
import { Link } from 'react-router-dom';
import Navbar from '../../utility/navbar/Navbar';
import './login.css';

const Login = (props) => {
  const LoginAuth = useSelector((state) => state.LoginAuth);
  const { isAuth, loading, error, msg } = LoginAuth;

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userObj = { email, password };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAuthenticate(userObj));
  };

  useEffect(() => {
    if (isAuth === true) {
      props.history.push('/dashboard');
    }
  }, [dispatch, isAuth]);

  return (
    <React.Fragment>
      <main id='login'>
        <div className='container'>
          <section className='section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center'>
                  <div className='d-flex justify-content-center py-4'>
                    <Link
                      to='/'
                      className='logo d-flex align-items-center w-auto'
                    >
                      <img src='assets/img/logo.png' alt='' />
                      <span className='d-none d-lg-block'>WorldStream</span>
                    </Link>
                  </div>

                  <div className='card mb-3'>
                    <div className='card-body'>
                      <div className='pt-4 pb-2'>
                        <h5 className='card-title text-center pb-0 fs-4'>
                          Login to Your Account
                        </h5>
                        <p className='text-center small'>
                          Enter your E-mail & password to login
                        </p>
                        {error ? (
                          <center>
                            <small
                              classNameName='text-center small'
                              style={{ color: 'red' }}
                            >
                              {msg}
                            </small>
                          </center>
                        ) : null}
                      </div>

                      <form
                        className='row g-3 needs-validation'
                        novalidate
                        onSubmit={handleSubmit}
                      >
                        <div className='col-12'>
                          <label htmlFor='yourUsername' className='form-label'>
                            Email
                          </label>
                          <div className='input-group has-validation'>
                            <span
                              className='input-group-text'
                              id='inputGroupPrepend'
                            >
                              @
                            </span>
                            <input
                              type='email'
                              className='form-control'
                              name='email'
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className='col-12'>
                          <label htmlFor='yourPassword' className='form-label'>
                            Password
                          </label>
                          <input
                            type='password'
                            className='form-control'
                            name='password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>

                        <div className='col-12'>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              name='remember'
                              value='true'
                              id='rememberMe'
                            />
                            <label className='form-check-label' htmlFor='rememberMe'>
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className='col-12'>
                          <button className='btn btn-primary w-100' type='submit'>
                            Login
                          </button>
                        </div>
                        <div className='col-12'>
                          <p className='small mb-0'>
                            Don't have account?{' '}
                            <Link to='/signup'>Create an account</Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Login;

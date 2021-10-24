import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../../actions/asyncAction';
import './signup.css';

const Signup = () => {
  const signUp = useSelector((state) => state.signupReducer);
  const { loading, message, data, error } = signUp;
  const dispatch = useDispatch();

  const [username, setUserName] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userObj = { username, first_name, last_name, email, password };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAccount(userObj));
  };

  const showLoading = () => {
    if(loading) return <div classNameName='alert alert-info'>Loading...</div>
  }
  
  const showError = () => {
    if (error) {
      return <div classNameName='alert alert-danger'>{error}</div>;
    }
  };
  const showMessage = () => {
    if (message === true && data !== null) {
      return <div classNameName='alert alert-success'>{data.msg}</div>;
    }
  };

  return (
    <React.Fragment>
      <main id='signup'>
        <div className='container'>
          <section className='section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-4 col-lg-6 d-flex flex-column align-items-center justify-content-center'>
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
                      {message ? (
                        showMessage()
                      ) : (
                        <>
                          <div className='pt-4 pb-2'>
                            <h5 className='card-title text-center pb-0 fs-4'>
                              Signup to create Account
                            </h5>
                          
                              { showLoading()}
                            {showError()}
                          </div>

                          <form
                            className='row g-3 needs-validation'
                            noValidate
                            onSubmit={handleSubmit}
                          >
                            <div className='col-12'>
                              <label htmlFor='yourUsername' className='form-label'>
                                Username
                              </label>
                              <div className='input-group has-validation'>
                                <input
                                  className='form-control'
                                  type='text'
                                  name='username'
                                  required
                                  onChange={(e) => setUserName(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className='col-12'>
                              <label htmlFor='yourUsername' className='form-label'>
                                First name
                              </label>
                              <div className='input-group has-validation'>
                                <input
                                  type='text'
                                  className='form-control'
                                  name='first_name'
                                  required
                                  onChange={(e) =>
                                    setFirst_name(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className='col-12'>
                              <label htmlFor='yourUsername' className='form-label'>
                                Last name
                              </label>
                              <div className='input-group has-validation'>
                                <input
                                  type='text'
                                  className='form-control'
                                  placeholder='Last Name'
                                  name='last_name'
                                  required
                                  onChange={(e) => setLast_name(e.target.value)}
                                />
                              </div>
                            </div>
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
                              <button
                                className='btn btn-primary w-100'
                                type='submit'
                              >
                                Login
                              </button>
                            </div>
                            <div className='col-12'>
                              <p className='small mb-0'>
                                Already have an acount?{' '}
                                <Link to='/login'>Log in</Link>
                              </p>
                            </div>
                          </form>
                        </>
                      )}
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

export default Signup;

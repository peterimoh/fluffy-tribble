import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../actions/asyncAction';

export const Form = ({ userID }) => {
  


  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  // console.log(userID);

  const updatePassword = useSelector(state => state.updatePassword)
  const dispatch = useDispatch()
  const {loading, response, error} = updatePassword

  const userObj = { password, newPassword, confirmPassword, userID };

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(updateUser(userObj));
  }

   const showError = () => {
     if (error) {
       return (
         <div classNameName='alert alert-dangetext-danger'>
           <p className='text-danger'>{error}</p>
         </div>
       );
     }
   };
   const showMessage = () => {
     if (response) {
       return (
         <div classNameName='alert alert-success '>
           <p className='text-success'> {response.data.message}</p>
         </div>
       );
     }
   };

  return (
    <section class='section'>
      <div class='row justify-content-center'>
        <div class='col-lg-6'>
          <div class='card'>
            <div class='card-body'>
              <h5 class='card-title'>Change Password</h5>
              {showError()}
              {showMessage()}

              <form onSubmit={handleSubmit}>
                <div class='row mb-3 w-100'>
                  <div class='col-sm-12'>
                    <input
                      type='password'
                      class='form-control'
                      placeholder='Enter Old Password'
                      name='password'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div class='row mb-3 w-100'>
                  <div class='col-sm-12'>
                    <input
                      type='password'
                      class='form-control'
                      placeholder='Enter New Password'
                      name='newPassword'
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div class='row mb-3 w-100'>
                  <div class='col-sm-12'>
                    <input
                      type='password'
                      class='form-control'
                      placeholder='Confirm New Password'
                      name='confirmPassword'
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                <input type='text' hidden value={userID} />

                <div class='row mb-3 w-100'>
                  <div class='col-sm-12'>
                    <button type='submit' class='btn btn-primary w-100'>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

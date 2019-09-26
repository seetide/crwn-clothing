import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.style.scss';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("'Passwords do not match!'");
      return;
    }

    signUpStart({ email, password, displayName });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not hav an account </h2>
      <span>Sign up with your email and password </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          label='Display Name'
          value={displayName}
          required
          onChange={handleChange}
        />
        <FormInput
          name='email'
          type='email'
          label='email'
          value={email}
          required
          onChange={handleChange}
        />

        <FormInput
          name='password'
          type='password'
          label='Password'
          value={password}
          required
          onChange={handleChange}
        />

        <FormInput
          name='confirmPassword'
          type='password'
          label='Confirm password'
          value={confirmPassword}
          required
          onChange={handleChange}
        />

        <CustomButton type='submit'>Sign up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);

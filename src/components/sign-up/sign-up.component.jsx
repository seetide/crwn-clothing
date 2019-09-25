import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.style.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("'Passwords do not match!'");
      return;
    }

    this.props.signUpStart({ email, password, displayName });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not hav an account </h2>
        <span>Sign up with your email and password </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            label='Display Name'
            value={displayName}
            required
            onChange={this.handleChange}
          />
          <FormInput
            name='email'
            type='email'
            label='email'
            value={email}
            required
            onChange={this.handleChange}
          />

          <FormInput
            name='password'
            type='password'
            label='Password'
            value={password}
            required
            onChange={this.handleChange}
          />

          <FormInput
            name='confirmPassword'
            type='password'
            label='Confirm password'
            value={confirmPassword}
            required
            onChange={this.handleChange}
          />

          <CustomButton type='submit'>Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);

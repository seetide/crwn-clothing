import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';
import './sign-in.style.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.emailSignInStart(email, password);
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2> I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='email'
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />

          <FormInput
            name='password'
            type='password'
            label='password'
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <div className='buttons'>
            <CustomButton type='submit'> SIGN IN </CustomButton>
            <CustomButton
              type='button'
              onClick={this.props.googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});
export default connect(
  null,
  mapDispatchToProps
)(SignIn);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signUp } from '../../redux/modules/signUp/signUpAction';

import {
  Heading,
  InputRow,
  InputIcon,
  Input,
  Form
 } from './styles';

 //com.
import PrimaryButton from '../../components/PrimaryButton';
import SpinnerSmall from '../../components/SpinnerSmall';
// img.
import IconEdit from '../../assets/icons/edit-1.png';
import IconPhone from '../../assets/icons/phone-1.png';
import IconEmail from '../../assets/icons/email.png';
import IconPassword from '../../assets/icons/password.svg';


const SignUp = ({
  signUp, 
  loading, 
  error, 
  success 
}) => {
  const history = useHistory();

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    let fullname = e.target.fullname.value;
    let phone = e.target.phone.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    const data = {
      fullname,
      phone,
      email,
      password
    };
    signUp(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Sign up to become a member</Heading>
      <InputRow>
        <InputIcon><img src={IconEdit} alt="icon"/></InputIcon>
        <Input 
          type="text" 
          name="fullname" 
          placeholder="Full name" 
        />
      </InputRow>
      <InputRow>
        <InputIcon><img src={IconPhone} alt="icon"/></InputIcon>
        <Input 
          type="tel" 
          name="phone" 
          placeholder="Phone number" 
        />
      </InputRow>
      <InputRow>
        <InputIcon><img src={IconEmail} alt="icon"/></InputIcon>
        <Input 
          type="email" 
          name="email" 
          placeholder="Email address" 
        />
      </InputRow>
      <InputRow>
        <InputIcon><img src={IconPassword} alt="icon"/></InputIcon>
        <Input 
          type="password" 
          name="password" 
          placeholder="Password" 
        />
      </InputRow>
      <InputRow>
        <PrimaryButton formBtn>
          {!error && !loading ? ('Sign up') : (<SpinnerSmall />)}
        </PrimaryButton>
      </InputRow>
      {
        !error && !loading && success ? (
          setTimeout(() => {
            history.push('/login')
          }, 1000)
        ) : null
      }
    </Form>
  );
};

SignUp.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  signUp: PropTypes.func.isRequired
};

SignUp.defualtProps = {
  loading: false,
  error: false,
  success: false,
  signUp: () => {}
};

const mapStateToProps = state => ({
  loading: state.signUpReducer.loading,
  error: state.signUpReducer.error,
  success: state.signUpReducer.success
});

const mapDispatchToProps = dispatch => ({
  signUp: (data) => dispatch(signUp(data))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SignUp);
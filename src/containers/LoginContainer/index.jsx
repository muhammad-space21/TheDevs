import React from 'react';

import {
  Heading,
  InputRow,
  InputIcon,
  Input,
  Form
} from './styles';

import PrimaryButton from '../../components/PrimaryButton';

import IconEdit from '../../assets/icons/edit-1.png';
import IconPhone from '../../assets/icons/phone-1.png';

const Login = () => {
  return (
    <Form>
      <Heading>Login to your account</Heading>
      <InputRow>
        <InputIcon><img src={IconEdit} alt="icon"/></InputIcon>
        <Input type="text" placeholder="Full name" />
      </InputRow>
      <InputRow>
        <InputIcon><img src={IconPhone} alt="icon"/></InputIcon>
        <Input type="text" placeholder="Phone number" />
      </InputRow>
      <InputRow><PrimaryButton formBtn>Login</PrimaryButton></InputRow>
    </Form>
  )
};

export default Login;
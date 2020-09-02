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
import IconEmail from '../../assets/icons/email.png';
import IconPassword from '../../assets/icons/password.svg';


const SignUp = () => {
  return (
    <Form>
      <Heading>Sign up to become a member</Heading>
      <InputRow>
        <InputIcon><img src={IconEdit} alt="icon"/></InputIcon>
        <Input type="text" name="fullname" placeholder="Full name" />
      </InputRow>
      <InputRow>
        <InputIcon><img src={IconPhone} alt="icon"/></InputIcon>
        <Input type="tel" name="phone" placeholder="Phone number" />
      </InputRow>
      <InputRow>
        <InputIcon><img src={IconEmail} alt="icon"/></InputIcon>
        <Input type="email" name="email" placeholder="Email address" />
      </InputRow>
      <InputRow>
        <InputIcon><img src={IconPassword} alt="icon"/></InputIcon>
        <Input type="password" name="password" placeholder="Password" />
      </InputRow>
      <InputRow>
        <PrimaryButton formBtn>Sign up</PrimaryButton>
      </InputRow>
    </Form>
  );
};

export default SignUp;
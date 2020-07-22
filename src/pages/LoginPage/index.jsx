import React from 'react';

import {
  Container, 
  Component, 
  Form, 
  ImageWrapper, 
  Heading,
  InputRow,
  InputIcon,
  Input
} from './styles';

import PrimaryButton from '../../components/PrimaryButton';

import Illustration from '../../assets/images/login.png';
import IconEdit from '../../assets/icons/edit-1.png';
import IconPhone from '../../assets/icons/phone-1.png';

const LoginPage = () => {
  return (
    <Container>
      <Component>
        <ImageWrapper> <img src={Illustration} alt="illustration" /></ImageWrapper>
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
      </Component>
    </Container>
  )
};

export default LoginPage;
import React from 'react';

import {
  Container, 
  Component, 
  ImageWrapper
} from './styles';

import Login from '../../containers/LoginContainer';

import Illustration from '../../assets/images/login.png';

const LoginPage = () => {
  return (
    <Container>
      <Component>
        <ImageWrapper> 
          <img src={Illustration} alt="illustration" />
        </ImageWrapper>
        <Login />
      </Component>
    </Container>
  )
};

export default LoginPage;
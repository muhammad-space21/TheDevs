import React from 'react';

import {
  Container, 
  Component,
  ImageWrapper 
} from './styles';

import SignUp from '../../containers/SignUpContainer';
import Illustration from '../../assets/images/computer.png';

const SignUpPage = () => {

  return (
    <Container>
      <Component>
        <ImageWrapper> 
          <img src={Illustration} alt="illustration" />
        </ImageWrapper>
        <SignUp />
      </Component>
    </Container>
  )
};


export default SignUpPage;
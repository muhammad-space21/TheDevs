import React from 'react';

import { Container, Col1, Col2, Heading } from './styles';

import ImageHeader from '../../assets/images/header-img.png';


const HeaderHowItWorks = () => (
  <Container>
    <Col1>
      <Heading> How it Works in TheDevs ?</Heading>
    </Col1>
    <Col2>
      <img src={ImageHeader} alt="icon"/>
    </Col2>
  </Container>
);

export default HeaderHowItWorks;
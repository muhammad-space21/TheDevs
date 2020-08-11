import React from 'react';

import { Container, Col1, Col2, Heading } from './styles';

import ImageHeader from '../../assets/icons/golden-price.png';


const HeaderPricingPlan = () => (
  <Container>
    <Col1>
      <Heading> What our <span>Golden Plan</span> includes ?</Heading>
    </Col1>
    <Col2>
      <img src={ImageHeader} alt="icon"/>
    </Col2>
  </Container>
);

export default HeaderPricingPlan;
import React from 'react';

import { Container, Col1, Col2, Heading } from './styles';

import ImageHeader from '../../assets/icons/golden-price.png';


const HeaderPricingPlan = (singlePrice) => (
  <Container>
    <Col1>
      <Heading> What our <span>{singlePrice.title}</span> includes ?</Heading>
    </Col1>
    <Col2>
      <img src={singlePrice.image} alt="icon"/>
    </Col2>
  </Container>
);

export default HeaderPricingPlan;
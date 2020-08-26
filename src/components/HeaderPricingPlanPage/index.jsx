import React from 'react';
import { connect } from 'react-redux';

import { Container, Col1, Col2, Heading } from './styles';


const HeaderPricingPlan = ({ singlePrice }) => (
  <Container>
    <Col1>
      <Heading> What our <span>{singlePrice.title}</span> includes ?</Heading>
    </Col1>
    <Col2>
      <img src={singlePrice.image} alt="icon"/>
    </Col2>
  </Container>
);

const mapStateToProps = (state) => ({
  singlePrice: state.singlePriceReducer.singlePrice
});

export default connect(mapStateToProps, null)(HeaderPricingPlan);
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Col1, Col2, Heading } from './styles';


const HeaderPricingPlan = ({singlePrice}) => (
  <Container>
    <Col1>
      <Heading> What our <span>{singlePrice.title}</span> Tarif includes ?</Heading>
    </Col1>
    <Col2>
      <img src={singlePrice.image} alt="icon"/>
    </Col2>
  </Container>
);

HeaderPricingPlan.propTypes = {
  singlePrice: PropTypes.object
};

HeaderPricingPlan.defaultProps = {
  singlePrice: {}
};

const mapStateToProps = (state) => ({
  singlePrice: state.singlePriceReducer.singlePrice
});

export default connect(mapStateToProps, null)(HeaderPricingPlan);
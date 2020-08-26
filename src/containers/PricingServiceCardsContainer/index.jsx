import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Row } from './styles';

import PricingServiceCardsItem from '../../components/PricingServiceCardsItem';
import Spinner from '../../components/Spinner';

const PricingServiceCardsContainer = ({ singlePrice, error, loading }) => {
  return (
    <Container>
      <Row>
        {
          !error && !loading && singlePrice ? (
            singlePrice.service_cards.map(({id, ...otherProps}) => (
              <PricingServiceCardsItem id={id} {...otherProps} />
            ))
          ) : (<Spinner />)
        }
      </Row>
    </Container>
  )
};

PricingServiceCardsContainer.propTypes = {
  // singlePrice: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool
};

PricingServiceCardsContainer.defaultPropTypes = {
  singlePrice: {},
  loading: false,
  error: false
};

const mapStateToProps = (state) => ({
  singlePrice: state.singlePriceReducer.singlePrice,
  loading: state.singlePriceReducer.loading,
  error: state.singlePriceReducer.error
});

export default connect(mapStateToProps, null)(PricingServiceCardsContainer);
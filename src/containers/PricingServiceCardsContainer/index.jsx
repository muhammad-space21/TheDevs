import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Row } from './styles';

import PricingServiceCardsItem from '../../components/PricingServiceCardsItem';
import Spinner from '../../components/Spinner';

const PricingServiceCardsContainer = ({
  singlePrice,
  error,
  loading
}) => {
  const {service_cards} = singlePrice;
  return (
    <Container>
      <Row>
        {
          !error && !loading && service_cards ? (
            service_cards.map(({id, ...otherProps}) => (
              <PricingServiceCardsItem key={id} id={id} {...otherProps} />
            ))
          ) : (<Spinner />)
        }
      </Row>
    </Container>
  )
};

PricingServiceCardsContainer.propTypes = {
  // singlePrice: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
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
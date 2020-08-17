import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { Container, Heading, Row } from './styles';

import * as Actions from '../../redux/modules/prices/pricesActions';

import PriceCards from '../../components/PriceCards';
import Spinner from '../../components/Spinner';

const PricesContainer = ({
  getPrices, 
  prices, 
  loading, 
  error 
}) => {

  //  Adding Action
  useEffect(() => {
    getPrices();
  }, []);
  
  return (
    <Container>
      <Heading>
        Choose Your Very Best <br/> 
        <span> Pricing Plan.</span> 
      </Heading>
      <Row>
        {
          prices.length && !loading && !error ? (
          prices.map(({id, ...otherProps}) => (
            <PriceCards key={id} id={id} {...otherProps} />
          ))
          ): (<Spinner />)
        }
      </Row>
    </Container>
  )
};

PricesContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  prices: PropTypes.object,
  getPrices: PropTypes.func
};

PricesContainer.defaultProps = {
  loading: false,
  error: false,
  prices: {},
  getPrices: () => {}
};

const mapStateToProps = (state) => ({
  loading: state.pricesReducer.loading,
  error: state.pricesReducer.error,
  prices: state.pricesReducer.prices
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(Actions, dispatch)
);

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PricesContainer);
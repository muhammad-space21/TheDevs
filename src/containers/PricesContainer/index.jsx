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
  
  console.log('prices', prices);
  
  return (
    <Container>
      <Heading>
        Choose Your Very Best <br/> 
        <span> Pricing Plan.</span> 
      </Heading>
      <Row>
        {
          !loading && !error && prices.length ? (
            prices.map(({id, ...otherProps}) => (
              <PriceCards key={id} id={id} {...otherProps} />
            ))
          ) : (<Spinner />)
        }
      </Row>
    </Container>
  )
};

PricesContainer.propTypes = {
  // prices: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getPrices: PropTypes.func.isRequired,
  error: PropTypes.bool
};

PricesContainer.defaultProps = {
  prices: {},
  loading: false,
  error: false,
  getPrices: () => {}
};

const mapStateToProps = (state) => ({
  prices: state.pricesReducer.prices,
  loading: state.pricesReducer.loading,
  error: state.pricesReducer.error
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(Actions, dispatch)
);

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PricesContainer);
import React from 'react';

import { Container, Row } from './styles';

import { pricingData } from '../../mockData/pricingData';

import PricingServiceCardsItem from '../../components/PricingServiceCardsItem';

const PricingServiceCardsContainer = (singlePrice) => {
  return (
    <Container>
      <Row>
        {
          singlePrice.service_cards.map(({id, ...otherProps}) => (
            <PricingServiceCardsItem id={id} {...otherProps} />
          ))
        }
      </Row>
    </Container>
  )
};

export default PricingServiceCardsContainer;
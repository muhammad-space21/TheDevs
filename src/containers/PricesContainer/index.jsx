import React from 'react';

import { Container, Heading, Row } from './styles';

import PriceCards from '../../components/PriceCards';
import { priceData } from '../../mockData/priceData';

const PricesContainer = () => {
  return (
    <Container>
      <Heading>
        Choose Your Very Best <br/> 
        <span> Pricing Plan.</span> 
      </Heading>
      <Row>
        {priceData.map(({id, ...otherProps}) => (
          <PriceCards id={id} {...otherProps} />
        ))}
      </Row>
    </Container>
  )
};

export default PricesContainer;
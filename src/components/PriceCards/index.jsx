import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container, 
  Price, 
  Hr, 
  CourseName, 
  Pros,
  PrevPrice
} from './styles';

import { Text } from '../../containers/Languages';
import PrimaryButton from '../PrimaryButton';

const PriceCards = ({
  id, 
  service_cards, 
  price, title, 
  previous_price
}) => {
  const history = useHistory();

  // routeChange
  const routeChange = () => {
    history.push(`/prices/${id}`)
  };

  return (
    <Container id="3">
      <Price>
        $ <h1>{previous_price}</h1> 
        <span>{price}</span> /<Text tid="monthText" />
      </Price>
      <Hr />
        <CourseName>{title}</CourseName>
      <Pros>
        {
          service_cards
          .sort((a, b) => a.access_level - b.access_level)
          .map(({id, title, primary}) => (
            primary ? (<span key={id}>{title}</span>) : null
          ))
        }
      </Pros>
      <PrimaryButton btnCard onClick={routeChange}>
        <Text tid="readMoreText" />
      </PrimaryButton>
    </Container>
  )
};


export default PriceCards;
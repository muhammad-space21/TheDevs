import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container, 
  Price, 
  Hr, 
  CourseName, 
  Pros
} from './styles';

import PrimaryButton from '../PrimaryButton';

import CardsDots from '../../assets/images/card-dots.png';


const PriceCards = ({id, service_cards, price, title}) => {
  const history = useHistory();

  // routeChange
  const routeChange = () => {
    history.push(`/prices/${id}`)
  };

  return (
    <Container id="3">
        <Price>$ <span>{price}</span> /month</Price>
      <Hr />
        <CourseName>{title}</CourseName>
      <Pros>
        {
          service_cards.primary === true ? (service_cards.map(({id, title}) => (
            <span key={id}>{title}</span>
          ))) : null
        }
      </Pros>
      <PrimaryButton btnCard onClick={routeChange}>
        Enroll
      </PrimaryButton>
      <img src={CardsDots} alt="card-dots"/>
    </Container>
  )
};


export default PriceCards;
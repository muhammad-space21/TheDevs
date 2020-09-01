import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container, 
  // Duration, 
  Price, 
  Hr, 
  CourseName, 
  Pros
} from './styles';

import PrimaryButton from '../PrimaryButton';

import CardsDots from '../../assets/images/card-dots.png';


const PriceCards = (prices) => {
  const history = useHistory();
  const {id} = prices;
  
  // routeChange
  const routeChange = () => {
    history.push(`/prices/${id}`)
  };

  return (
    <Container id="3">
      {/* <Duration> {} </Duration> */}
        <Price>$ <span>{prices.price}</span> /month</Price>
      <Hr />
        <CourseName>{prices.title}</CourseName>
      <Pros>
       {/* {
          prices.map(({id, idx}) => (<span key={id}>{prices.options}</span>))
       } */}
      </Pros>
      <PrimaryButton btnCard onClick={routeChange}>
        Enroll
      </PrimaryButton>
      <img src={CardsDots} alt="card-dots"/>
    </Container>
  )
};

export default PriceCards;
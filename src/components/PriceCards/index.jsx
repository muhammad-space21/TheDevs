import React from 'react';

import {
  Container, 
  Duration, 
  Price, 
  Hr, 
  CourseName, 
  Pros
} from './styles';

import PrimaryButton from '../PrimaryButton';

import CardsDots from '../../assets/images/card-dots.png';


const PriceCards = ({
  courseName, 
  duration, 
  price, 
  pros1, 
  pros2, 
  pros3, 
  pros4
  }) => {
  return (
    <Container id="3">
      <Duration> {duration} </Duration>
        <Price><span>{price}</span> /month</Price>
      <Hr />
        <CourseName>{courseName}</CourseName>
      <Pros>
        <span>{pros1}</span>
        <span>{pros2}</span>
        <span>{pros3}</span>
        <span>{pros4}</span>
      </Pros>
      <PrimaryButton btnCard>Enroll</PrimaryButton>
      <img src={CardsDots} alt="card-dots"/>
    </Container>
  )
};

export default PriceCards;
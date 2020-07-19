import React from 'react';

import { 
  Container,
  Heading,
  SubTitle,
  TextWrapper,
  IconWrapper
 } from './styles';

import IconLabel from '../../assets/icons/checkout.svg';

const MoneyBackPolicy = () => (
  <Container>
    <Heading>30-Day Money-Back Guarantee</Heading>
    <SubTitle>Try it risk-free</SubTitle>
    <TextWrapper>
      I’m confident you’ll be 100% satisfied with this course. But in the unlikely event you 
      decide it’s not for you, just ask for a refund any time during the first 30 days and 
      you’ll get your money back with no questions asked.
    </TextWrapper>
    <IconWrapper><img src={IconLabel} alt="icon"/></IconWrapper>
  </Container>
);

export default MoneyBackPolicy;
import React from 'react';

import { Container, Heading } from './styles';

import PrimaryButton from '../PrimaryButton';

import IconCart from '../../assets/icons/cart.png';


const JoinITCommunitySection = () => {
  return (
    <Container>
      <Heading>Join the large community of happy programmers!</Heading>
      <PrimaryButton btnCircleRed>
        <img src={IconCart} alt="icon"/>
        Enroll to course
      </PrimaryButton>
    </Container>
  )
};

export default JoinITCommunitySection;
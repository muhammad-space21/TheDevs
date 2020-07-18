import React from 'react';

import { 
  Container, 
  ImageWrapper, 
  Column, 
  Heading
} from './styles';

import PrimaryButton from '../PrimaryButton';
import ImageIllustration from '../../assets/images/header-web-developer.png';

const CallToActionSectionTwo = () => {
  return (
    <Container>
      <ImageWrapper>
        <img src={ImageIllustration} alt="illustration" />
      </ImageWrapper>
      <Column>
        <Heading>
          Why to study 
          <span> frontend development </span>  
          in 2020, and is it worth it ?
        </Heading>
        <PrimaryButton btnCircle>Read more</PrimaryButton>
      </Column>
    </Container>
  )
};

export default CallToActionSectionTwo;
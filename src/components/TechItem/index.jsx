import React from 'react';

import { 
  Container,
  ImageWrapper,
  Footer,
  TechName,
  TechTitle,
  Duration
 } from './styles';


const TechItem = ({
  name, 
  image, 
  subtitle,
  duration
  }) => {
  return (
    <Container>
      <ImageWrapper>
        <img src={image} alt="technology"/>
      </ImageWrapper>
      <Footer>
        <TechName>
          {name}
        </TechName>
        <TechTitle>
          {subtitle}
        </TechTitle>
        <Duration>
          Duration: <span>{duration}</span>
        </Duration>    
      </Footer>
    </Container>
  )
};

export default TechItem;
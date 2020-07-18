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
  techImg, 
  techName, 
  duration, 
  title
  }) => {
  return (
    <Container>
      <ImageWrapper>
        <img src={techImg} alt="technology"/>
      </ImageWrapper>
      <Footer>
        <TechName>
          {techName}
        </TechName>
        <TechTitle>
          {title}
        </TechTitle>
        <Duration>
          Duration: <span>{duration}</span>
        </Duration>    
      </Footer>
    </Container>
  )
};

export default TechItem;
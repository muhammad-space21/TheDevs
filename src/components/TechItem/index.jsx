import React from 'react';

import { 
  Container,
  ImageWrapper,
  Footer,
  TechName,
  TechTitle,
  // Duration
 } from './styles';


const TechItem = ({
  title, 
  image, 
  description
  }) => {
  return (
    <Container>
      <ImageWrapper>
        <img src={image} alt="technology"/>
      </ImageWrapper>
      <Footer>
        <TechName>
          {title}
        </TechName>
        <TechTitle>
          {description}
        </TechTitle>
        {/* <Duration>
          Duration: <span>{duration}</span>
        </Duration>     */}
      </Footer>
    </Container>
  )
};

export default TechItem;
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

  const [days, hours] = duration.split(' ');
  let weeks_count = Math.floor(days / 7);

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
          Duration: <span>{weeks_count} weeks</span>
        </Duration>    
      </Footer>
    </Container>
  )
};

export default TechItem;
import React from 'react';

import { 
  Container,
  ImageWrapper,
  Footer,
  TechName,
  TechTitle,
  Duration
 } from './styles';

import { Text } from '../../containers/Languages';

const TechItem = ({
  name, 
  image, 
  subtitle,
  duration
}) => {

  // calculate duration
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
          <Text tid="durationText" />: 
          <span>{weeks_count} <Text tid="weeksText" /></span>
        </Duration>    
      </Footer>
    </Container>
  )
};

export default TechItem;
import React from 'react';

import { 
  Container,
  IllustrationWrapper1,
  IllustrationWrapper2,
  Img1,
  Img2,
  Img3,
  Img4,
  TextWrapper,
  Heading,
  SubTitle,
  BulletPoint,
  BulletPointContainer
 } from './styles';

 // img.
import IllustrationOne from '../../assets/images/circle1.png';
import IllustrationTwo from '../../assets/images/circle2.png';
import IllustrationThree from '../../assets/images/circle3.png';
import IllustrationFour from '../../assets/images/circle4.png';
import IconBullet from '../../assets/icons/pin.png';

const WhatYouLearnSection = (expectations) => {
  return (
    <Container>
      <IllustrationWrapper1>
        <Img1><img src={IllustrationOne} alt="illustration1"/></Img1>
        <Img2><img src={IllustrationTwo} alt="illustration2"/></Img2>
      </IllustrationWrapper1>
      <TextWrapper>
        <Heading>What You'll Learn...</Heading>
        <SubTitle>
          {expectations.description}
        </SubTitle>
        </TextWrapper>
        <BulletPointContainer>
          {
            expectations.map(({id, idx}) => (
              <BulletPoint>
                <img src={IconBullet} alt="icon"/>
                <span key={expectations.title}>{expectations.title}</span>
              </BulletPoint>
            ))
          }
        </BulletPointContainer>
      <IllustrationWrapper2>
        <Img3><img src={IllustrationThree} alt="illustration3"/></Img3>
        <Img4><img src={IllustrationFour} alt="illustration4"/></Img4>
      </IllustrationWrapper2>
    </Container>
  )
};

export default WhatYouLearnSection;
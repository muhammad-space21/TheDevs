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

import IllustrationOne from '../../assets/images/circle1.png';
import IllustrationTwo from '../../assets/images/circle2.png';
import IllustrationThree from '../../assets/images/circle3.png';
import IllustrationFour from '../../assets/images/circle4.png';
import IconBullet from '../../assets/icons/pin.png';

const WhatYouLearnSection = () => {
  return (
    <Container>
      <IllustrationWrapper1>
        <Img1><img src={IllustrationOne} alt="illustration1"/></Img1>
        <Img2><img src={IllustrationTwo} alt="illustration2"/></Img2>
      </IllustrationWrapper1>
      <TextWrapper>
        <Heading>What You'll Learn...</Heading>
        <SubTitle>
          Unlike other courses teaching you how to build to-do apps, 
          I'm going to show you how to build a real video rental app. 
          You'll master all the essential skills you need to build professional quality apps.
        </SubTitle>
        </TextWrapper>
        <BulletPointContainer>
          <BulletPoint>
            <img src={IconBullet} alt="icon"/>
            <span>Modern JavaScript features.</span>
          </BulletPoint>
          <BulletPoint>
            <img src={IconBullet} alt="icon"/>
            <span>Build reusable components.</span>
          </BulletPoint>
          <BulletPoint>
            <img src={IconBullet} alt="icon"/>
            <span>Build tables and lists with pagination, sorting and searching.</span>
          </BulletPoint>
          <BulletPoint>
            <img src={IconBullet} alt="icon"/>
            <span>Build forms with validation.</span>
          </BulletPoint>
          <BulletPoint>
            <img src={IconBullet} alt="icon"/>
            <span>Implement routing with React Router.</span>
          </BulletPoint>
          <BulletPoint>
            <img src={IconBullet} alt="icon"/>
            <span>Call HTTP services with Axios.</span>
          </BulletPoint>
          <BulletPoint>
            <img src={IconBullet} alt="icon"/>
            <span>Implement authentication and authorization.</span>
          </BulletPoint>
          <BulletPoint>
            <img src={IconBullet} alt="icon"/>
            <span>Handle and log errors effectively.</span>
          </BulletPoint>
          <BulletPoint>
            <img src={IconBullet} alt="icon"/>
            <span>All about Function Components and Hooks.</span>
          </BulletPoint>
          <BulletPoint>
            <img src={IconBullet} alt="icon"/>
            <span>Share data using React Context.</span>
          </BulletPoint>
          <BulletPoint>
            <img src={IconBullet} alt="icon"/>
            <span>Deploy your React apps to Heroku.</span>
          </BulletPoint>
          <BulletPoint>
            <img src={IconBullet} alt="icon"/>
            <span>Write clean, maintainable code like a pro.</span>
          </BulletPoint>
          <BulletPoint>
            <img src={IconBullet} alt="icon"/>
            <span>Shortcuts to write more code in less time.</span>
          </BulletPoint>
          <BulletPoint>
            <img src={IconBullet} alt="icon"/>
            <span>And much, much more!</span>
          </BulletPoint>
        </BulletPointContainer>
      <IllustrationWrapper2>
        <Img3><img src={IllustrationThree} alt="illustration3"/></Img3>
        <Img4><img src={IllustrationFour} alt="illustration4"/></Img4>
      </IllustrationWrapper2>
    </Container>
  )
};

export default WhatYouLearnSection;
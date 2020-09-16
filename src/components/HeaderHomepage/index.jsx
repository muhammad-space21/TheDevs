import React from 'react';

import { Container, TextWrapper, ImageWrapper } from './styles';

import { BounceInUpAnimation, BounceInRightAnimation } from '../../utils/animations';

import ImageHeader from '../../assets/images/header.png';



const HeaderHomepage = () => {
  return (
    <Container>
        <TextWrapper>
          <BounceInUpAnimation>
            Master <span>Web development </span>, <span>Web design </span>  
            & <span>Mobile development </span>in 6 months
            and boost your career.
          </BounceInUpAnimation>
        </TextWrapper>
      <ImageWrapper>
        <BounceInRightAnimation>
          <img src={ImageHeader} alt="header"/>
        </BounceInRightAnimation>
      </ImageWrapper>
    </Container>
  );
};

export default HeaderHomepage;
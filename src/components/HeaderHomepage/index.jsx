import React from 'react';

import { Container, TextWrapper, ImageWrapper } from './styles';

import { BounceInUpAnimation, BounceInRightAnimation } from '../../utils/animations';

import { Text } from '../../containers/Languages';

import ImageHeader from '../../assets/images/header.png';



const HeaderHomepage = () => {
  return (
    <Container>
        <TextWrapper>
          <BounceInUpAnimation>
            <Text tid="headerHomepageText" />
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
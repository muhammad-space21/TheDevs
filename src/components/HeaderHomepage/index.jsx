import React from 'react';

import { Container, TextWrapper, ImageWrapper } from './styles';

import ImageHeader from '../../assets/images/header.png';

const HeaderHomepage = () => {
  return (
    <Container>
      <TextWrapper>
        Master <span>Web development </span>  
        & <span>Mobile development </span>in 6 month
        and boost your career.
      </TextWrapper>
      <ImageWrapper>
        <img src={ImageHeader} alt="header"/>
      </ImageWrapper>
    </Container>
  );
};

export default HeaderHomepage;
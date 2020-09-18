import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container, 
  Row, 
  Brand, 
  Col1, 
  SubRow, 
  SubCol,
  Heading,
  Links,
  ImageWrapper,
  HR,
  SubCol2,
  Row2,
  TextWrapper,
  H6,
  H7,
  Hashlink,
  Tel,
  SocialMedia
} from './styles';

import { Text } from '../../containers/Languages';

// img.
import IconInstagram from '../../assets/icons/instagram.svg';
import IconFacebook from '../../assets/icons/facebook.svg';
import IconTelegram from '../../assets/icons/telegram.svg';
import IconYoutube from '../../assets/icons/youtube.svg';
import ImageFooter from '../../assets/images/footer.png';
import LogoBrand from '../../assets/icons/logo-white.png';


const Footer = () => {
  return (
    <Container>
      <Brand>
      <Link to="/">
        <img src={LogoBrand} alt="..." />
      </Link>
        <SocialMedia>
          <a href="http://fb.me/edu.thedevs.co">
            <img src={IconFacebook} alt="facebook" />
          </a>
          <a href="http://instagram.com/edu.thedevs.co">
            <img src={IconInstagram} alt="instagram" />
          </a>
          <a href="http://t.me/eduthedevsco">
            <img src={IconTelegram} alt="telegram" />
          </a>
          <a href="">
            <img src={IconYoutube} alt="youtube" />          
          </a>
        </SocialMedia>
      </Brand>
      <Row>
        <Col1>
          <SubRow> 
              <SubCol>
                <Heading><Text tid="footerHeadingOneText" /></Heading>
                <Links to='/how-it-works'><Text tid="footerLinkOneText" /></Links>
                <Hashlink to='#3'><Text tid="footerLinkTwoText" /></Hashlink>
                <Hashlink to='#1'><Text tid="footerLinkThreeText" /></Hashlink>
              </SubCol>
              <SubCol>
                <Heading><Text tid="footerHeadingTwoText" /></Heading>
                <Links to='/about'><Text tid="footerLinkFourText" /></Links>
                <Links to='#'><Text tid="footerLinkFiveText" /></Links>
                <Hashlink to='#2'><Text tid="footerLinkSixText" /></Hashlink>
              </SubCol>
          </SubRow>
          <SubCol2>
            <Heading><Text tid="footerHeadingThreeText" /></Heading>
            <Tel href="tel:998909091016">+998 99 369 68 41</Tel>
            <Links to='#'>info@edu.thedevs.co</Links>
          </SubCol2>
        </Col1>
        <ImageWrapper>
          <img src={ImageFooter} alt="footer"/>
        </ImageWrapper>
      </Row>
      <HR />
      <Row2>
        <H7>© Copyright 2020 The Devs. <Text tid="footerLinkNineText" /></H7>
        <TextWrapper>
          <H6 to="#"><Text tid="footerLinkSevenText" /></H6>
          <H6 to="#"><Text tid="footerLinkEightText" /></H6>
        </TextWrapper>
      </Row2>
    </Container>
  )
};

export default Footer;

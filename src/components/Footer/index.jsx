import React from 'react';
import { Link } from 'react-router';

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

import IconInstagram from '../../assets/icons/instagram.svg';
import IconFacebook from '../../assets/icons/facebook.svg';
import IconTelegram from '../../assets/icons/telegram.svg';
import IconYoutube from '../../assets/icons/youtube.svg';

import ImageFooter from '../../assets/images/footer.png';


const Footer = () => {
  return (
    <Container>
      <Brand>
        <span>The Devs</span>
        <SocialMedia>
          <a href="http://fb.me/edu.thedevs.co">
            <img src={IconFacebook} alt="facebook" />
          </a>
          <a href="">
            <img src={IconInstagram} alt="instagram" />
          </a>
          <a href="">
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
                <Heading>Service Links</Heading>
                <Links to='#'>Our Portfolio</Links>
                <Hashlink to='#3'>Pricing</Hashlink>
                <Hashlink to='#1'>Courses</Hashlink>
              </SubCol>
              <SubCol>
                <Heading>Links</Heading>
                <Links to='/about'>About us</Links>
                <Links to='/how-it-works'>How it works</Links>
                <Hashlink to='#2'>Our Benefits</Hashlink>
              </SubCol>
          </SubRow>
          <SubCol2>
            <Heading>Contacts</Heading>
            <Tel href="tel:998909091016">+998 99 369 68 41</Tel>
            <Links to='#'>zokirov.d@list.ru</Links>
          </SubCol2>
        </Col1>
        <ImageWrapper>
          <img src={ImageFooter} alt="footer"/>
        </ImageWrapper>
      </Row>
      <HR />
      <Row2>
        <H7>© Copyright 2020 The Devs. All Rights Reserved.</H7>
        <TextWrapper>
          <H6 to="/terms-and-service">Terms of Service</H6>
          <H6 to="/privacy-policy">Privacy Policy</H6>
        </TextWrapper>
      </Row2>
    </Container>
  )
};

export default Footer;

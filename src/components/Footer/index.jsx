import React from 'react';

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
  H7
} from './styles';

import ImageFooter from '../../assets/images/footer.png';


const Footer = () => {
  return (
    <Container>
      <Brand>The <span>Devs</span></Brand>
      <Row>
        <Col1>
          <SubRow> 
              <SubCol>
                <Heading>Service Links</Heading>
                <Links to='our-porfolio'>Our Portfolio</Links>
                <Links to='pricing'>Pricing</Links>
                <Links to='courses'>Courses</Links>
              </SubCol>
              <SubCol>
                <Heading>Links</Heading>
                <Links to='about-us'>About us</Links>
                <Links to='process-of-study'>Process of study</Links>
                <Links to='our-benefits'>Our Benefits</Links>
              </SubCol>
          </SubRow>
          <SubCol2>
            <Heading>Contacts</Heading>
            <Links to='#'>+998 90 909 09 09</Links>
            <Links to='#'>example@gmail.com</Links>
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
          <H6>Terms of Service</H6>
          <H6>Privacy Policy</H6>
        </TextWrapper>
      </Row2>
    </Container>
  )
};

export default Footer;

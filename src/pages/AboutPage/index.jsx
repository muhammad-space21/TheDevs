import React from 'react';

import { 
  Container, 
  TextWrapper, 
  HR, 
  Heading,
  Row,
  IconWrapper,
  Text
} from './styles';

import NavbarMain from '../../components/Navbar';
import HeaderAboutPage from '../../components/HeaderAboutPage';
import SalaryLabel from '../../components/SalaryLabel';
import Footer from '../../components/Footer';

import IconTarget from '../../assets/icons/target2.png';
import IconChat from '../../assets/icons/chat.png';
import IconPortfolio from '../../assets/icons/portfolio2.png';


const AboutPage = () => {
  return (
    <Container>
      <NavbarMain />
      <HeaderAboutPage />
      <TextWrapper>
        <span>TheDevs </span>,
        we’ve seen again and again how the seemingly simple act of creating 
        can be a force for growth, change, and discovery in people’s lives. 
        We want to inspire and multiply the kind of creative exploration 
        that furthers expression, learning and application.
      </TextWrapper>
      <HR />
      <TextWrapper>
        <span>TheDevs </span>
        is an online learning platform for  those  seeking to do
        successful career in web development, mobile development or design, and more. 
        On <span>TheDevs </span>, members come together to find inspiration and 
        take the next step in their creative journey.
      </TextWrapper>
      <Heading>At <span>TheDevs,</span>  We Guarantee:</Heading>
      <Row>
        <IconWrapper>
          <img src={IconTarget} alt="target"/>
          <Text>
            Studnets will acquire IT skills,
            and reach their professional target,
            invest in their future
          </Text>
        </IconWrapper>
        <IconWrapper>
          <img src={IconChat} alt="chat"/>
          <Text>
            Studnets will exchange ideas
            and enterprise  with other IT geeks,
            and learn from large community
          </Text>
        </IconWrapper>
        <IconWrapper>
          <img src={IconPortfolio} alt="portfolio"/>
          <Text>
            Studnets will build their
            professional portfolio to represent
            their skills and get their dream jobs 
          </Text>
        </IconWrapper>
      </Row>
      <SalaryLabel />
      <Footer />
    </Container>
  )
};

export default AboutPage;
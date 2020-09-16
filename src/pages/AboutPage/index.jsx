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
        Undoubtedly, Information Technology is becomming the dream proffession 
        day by day. And many people seek high quality and effective courses to
        master IT skills. In theDevs you will gain adequate knowledge to boost your
        IT skills and creativity. We care about our students and their future.
        With theDevs you will have an opportunity to get employed in IT industry upon
        completion of the course with the solid, outstanding portfolio of yours which
        we also help you build. 
      </TextWrapper>
      <HR />
      <TextWrapper>
        <span>TheDevs </span>
        is an online learning platform for  those  seeking to do
        successful career in web development, mobile development or design, and more. 
        On <span>TheDevs </span>, members come together to find inspiration and 
        take the next step in their IT and creative journey.
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
      {/* <SalaryLabel /> */}
      <Footer />
    </Container>
  )
};

export default AboutPage;
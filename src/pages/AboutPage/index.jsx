import React from 'react';

import { 
  Container, 
  TextWrapper, 
  HR, 
  Heading,
  Row,
  IconWrapper,
  TextMain
} from './styles';

import { Text } from '../../containers/Languages';
//comp.
import NavbarMain from '../../components/Navbar';
import HeaderAboutPage from '../../components/HeaderAboutPage';
import Footer from '../../components/Footer';

//img.
import IconTarget from '../../assets/icons/target2.png';
import IconChat from '../../assets/icons/chat.png';
import IconPortfolio from '../../assets/icons/portfolio2.png';


const AboutPage = () => {
  return (
    <Container>
      <NavbarMain />
      <HeaderAboutPage />
      <TextWrapper>
        <Text tid="aboutUsParagraphOne" />
      </TextWrapper>
      <HR />
      <TextWrapper>
        <span> <Text tid="theDevsPurpleText" /> </span>
        <Text tid="aboutUsParagraphTwo" />
      </TextWrapper>
      <Heading>
        <Text tid="atText" />
        <span> <Text tid="theDevsPurpleText" />, </span> 
        <Text tid="weGuaranteeText" />
      </Heading>
      <Row>
        <IconWrapper>
          <img src={IconTarget} alt="target"/>
          <TextMain>
            <Text tid="aboutUsSubtitleOneText" />
          </TextMain>
        </IconWrapper>
        <IconWrapper>
          <img src={IconChat} alt="chat"/>
          <TextMain>
            <Text tid="aboutUsSubtitleTwoText" />
          </TextMain>
        </IconWrapper>
        <IconWrapper>
          <img src={IconPortfolio} alt="portfolio"/>
          <TextMain>
            <Text tid="aboutUsSubtitleThreeText" /> 
          </TextMain>
        </IconWrapper>
      </Row>
      <Footer />
    </Container>
  )
};

export default AboutPage;
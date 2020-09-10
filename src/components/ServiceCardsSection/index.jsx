import React from 'react';

import { 
  Container,
  Heading,
  Row,
  IconWrapper,
  TextWrapper,
  ServiceCard
 } from './styles';

 import IconCertified from '../../assets/icons/certificate-file.png';
 import IconControl from '../../assets/icons/control.png';
 import IconDiscussion from '../../assets/icons/discussion.png';
 import IconWebCoding from '../../assets/icons/web-coding.png';
 import IconWork from '../../assets/icons/work.png';
 import IconAgenda from '../../assets/icons/agenda.png';


const ServiceCardsSection = () => {
  return (
    <Container id="2">
      <Heading> 
        Make <span> profitable career </span> 
        as a developer <br/> faster than ever
      </Heading>
      <Row>
        <ServiceCard>
          <IconWrapper>
            <img src={IconCertified} alt="icon"/>
          </IconWrapper>
          <TextWrapper>
            Best Quality
            <span>
              Sorem spsum dolor sit amsectetur 
              adipisclit, seddo eiusmod 
              tempor incididunt ut laborea.
            </span>
          </TextWrapper>
        </ServiceCard>
        <ServiceCard>
          <IconWrapper>
            <img src={IconControl} alt="icon"/>
          </IconWrapper>
          <TextWrapper>
            Comfortable platforms
            <span>
              Sorem spsum dolor sit amsectetur 
              adipisclit, seddo eiusmod 
              tempor incididunt ut laborea.
            </span>
          </TextWrapper>
        </ServiceCard>
        <ServiceCard>
          <IconWrapper>
            <img src={IconWebCoding} alt="icon"/>
          </IconWrapper>
          <TextWrapper>
            Debuging and code review assistance
            <span>
              Sorem spsum dolor sit amsectetur 
              adipisclit, seddo eiusmod 
              tempor incididunt ut laborea.
            </span>
          </TextWrapper>
        </ServiceCard>
        <ServiceCard>
          <IconWrapper>
            <img src={IconWork} alt="icon"/>
          </IconWrapper>
          <TextWrapper>
            Portfolio building assistance
            <span>
              Sorem spsum dolor sit amsectetur 
              adipisclit, seddo eiusmod 
              tempor incididunt ut laborea.
            </span>
          </TextWrapper>
        </ServiceCard>
        <ServiceCard>
          <IconWrapper>
            <img src={IconDiscussion} alt="icon"/>
          </IconWrapper>
          <TextWrapper>
            Mentoring assistance and communication
            <span>
              Sorem spsum dolor sit amsectetur 
              adipisclit, seddo eiusmod 
              tempor incididunt ut laborea.
            </span>
          </TextWrapper>
        </ServiceCard>
        <ServiceCard>
          <IconWrapper>
            <img src={IconAgenda} alt="icon"/>
          </IconWrapper>
          <TextWrapper>
            Affordable and worthwhile price
            <span>
              Sorem spsum dolor sit amsectetur 
              adipisclit, seddo eiusmod 
              tempor incididunt ut laborea.
            </span>
          </TextWrapper>
        </ServiceCard>
      </Row>
    </Container>
  )
};

export default ServiceCardsSection;
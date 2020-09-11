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
             We provide the best quality of the 
             trainings to help you master the IT skills
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
              Our lessons are recorded for further usage in 
              our telegram bot, to make it comfortable for you
              to use anytime you want
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
              Our instructors will help you with code 
              review and debugging as they are the most 
              important aspects of programming
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
              We will help you to make your
              professional portfolio to get
              a job in industry as soon as possible
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
              Our instructors will be mentoring you
              24/7 and you can enjoy the communication
              with them and your coursemates in our Discord 
              platform
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
              We will help you to be an IT guy in really 
              short period for less amount of money spent
            </span>
          </TextWrapper>
        </ServiceCard>
      </Row>
    </Container>
  )
};

export default ServiceCardsSection;
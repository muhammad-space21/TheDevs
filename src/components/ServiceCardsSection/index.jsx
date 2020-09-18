import React from 'react';

import {
  Container,
  Heading,
  Row,
  IconWrapper,
  TextWrapper,
  ServiceCard
 } from './styles';

 import { Text } from '../../containers/Languages';

 // img.
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
        <Text tid="makeText" />
        <span> <Text tid="profitableCareerText" /> </span> 
        <Text tid="asADeveloperFasterThanEverText" />
      </Heading>
      <Row>
        <ServiceCard>
          <IconWrapper>
            <img src={IconCertified} alt="icon"/>
          </IconWrapper>
          <TextWrapper>
            <Text tid="serviceCardsTitleOneText" />
            <span>
              <Text tid="serviceCardsSubtitleOneText" />
            </span>
          </TextWrapper>
        </ServiceCard>
        <ServiceCard>
          <IconWrapper>
            <img src={IconControl} alt="icon"/>
          </IconWrapper>
          <TextWrapper>
          <Text tid="serviceCardsTitleTwoText" />
            <span>
              <Text tid="serviceCardsSubtitleTwoText" />
            </span>
          </TextWrapper>
        </ServiceCard>
        <ServiceCard>
          <IconWrapper>
            <img src={IconWebCoding} alt="icon"/>
          </IconWrapper>
          <TextWrapper>
            <Text tid="serviceCardsTitleThreeText" />
            <span>
              <Text tid="serviceCardsSubtitleThreeText" />
            </span>
          </TextWrapper>
        </ServiceCard>
        <ServiceCard>
          <IconWrapper>
            <img src={IconWork} alt="icon"/>
          </IconWrapper>
          <TextWrapper>
            <Text tid="serviceCardsTitleFourText" />
            <span>
              <Text tid="serviceCardsSubtitleFourText" />
            </span>
          </TextWrapper>
        </ServiceCard>
        <ServiceCard>
          <IconWrapper>
            <img src={IconDiscussion} alt="icon"/>
          </IconWrapper>
          <TextWrapper>
            <Text tid="serviceCardsTitleFiveText" />
            <span>
              <Text tid="serviceCardsSubtitleFiveText" />
            </span>
          </TextWrapper>
        </ServiceCard>
        <ServiceCard>
          <IconWrapper>
            <img src={IconAgenda} alt="icon"/>
          </IconWrapper>
          <TextWrapper>
            <Text tid="serviceCardsTitleSixText" />
            <span>
              <Text tid="serviceCardsSubtitleSixText" />
            </span>
          </TextWrapper>
        </ServiceCard>
      </Row>
    </Container>
  )
};

export default ServiceCardsSection;
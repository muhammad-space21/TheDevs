import React from 'react';

import { 
  Container, 
  Heading, 
  VideoContainer, 
  BtnWrapper 
} from './styles';

import PrimaryButton from '../PrimaryButton';

import SuccessVideo from '../../assets/videos/video.mp4';

const LeadModalAlertSuccess = ({ closeCallback }) => {
  return (
    <Container>
      <Heading>
        Your application sent successfully. <br/> We will Contact you soon.
      </Heading>
      <VideoContainer muted loop autoPlay>
        <source src={SuccessVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoContainer>
      <BtnWrapper>
        <PrimaryButton onClick={() => closeCallback()} btnCircleRed>
          Close
        </PrimaryButton>
      </BtnWrapper>
    </Container>
  )
};

export default LeadModalAlertSuccess;
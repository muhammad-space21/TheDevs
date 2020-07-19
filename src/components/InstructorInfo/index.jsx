import React from 'react';

import { 
  Container, 
  AvatarContainer, 
  Avatar, 
  InstructorName, 
  TextWrapper 
} from './styles';

import InstructorImg from '../../assets/images/instructor-daler.jpg';


const InstructorInfo = () => {
  return (
    <Container>
      <AvatarContainer>
        <span>Your Instructor</span>
        <Avatar>
          <img src={InstructorImg} alt="instructor"/>
        </Avatar>
        <InstructorName>Daler Zakirov</InstructorName>
      </AvatarContainer>
      <TextWrapper>
        Hi! My name is Mosh Hamedani. 
        I'm a software engineer with almost two decades of experience. 
        I've taught over nine million people how to code and how to 
        become professional software engineers through my online 
        courses and YouTube channel.

        I believe coding should be fun and accessible to everyone.
      </TextWrapper>
    </Container>
  )
};

export default InstructorInfo;
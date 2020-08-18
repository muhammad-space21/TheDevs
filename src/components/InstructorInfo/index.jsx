import React from 'react';

import { 
  Container, 
  AvatarContainer, 
  Avatar, 
  InstructorName, 
  TextWrapper 
} from './styles';

const InstructorInfo = (author) => {
  return (
    <Container>
      <AvatarContainer>
        <span>Your Instructor</span>
        <Avatar>
          <img src={author.image} alt="instructor"/>
        </Avatar>
      <InstructorName>{author.name}</InstructorName>
      </AvatarContainer>
      <TextWrapper>
       {author.info}
      </TextWrapper>
    </Container>
  )
};

export default InstructorInfo;
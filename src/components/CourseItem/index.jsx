import React from 'react';

import { 
  Container,
  ImageWrapper,
  Footer,
  CourseTitle,
  Duration,
  InfoContainer,
  AuthorContainer,
  AuthorName,
  Avatar,
  IconWrapper
 } from './styles';

 import IconShare from '../../assets/icons/icon-share.png';
 import IconLike from '../../assets/icons/icon-like.png';

//  import ImageFrontend from '../../assets/images/frontend-img.png';
//  import ImageBackend from '../../assets/images/backend-img.jpg';
//  import ImageMobile from '../../assets/images/mobile-img.png';
 import IconAvatar from '../../assets/icons/avatar.png';

const CourseItem = (courses) => {
  return (
    <Container>
      <ImageWrapper>
        <img src={courses.image} alt="course"/>
      </ImageWrapper>
      <Footer>
        <CourseTitle>
          {courses.title} <span>development</span> 
        </CourseTitle>
        <Duration>
          Duration: <span>{courses.duration}</span>
        </Duration>
        <InfoContainer>
          <AuthorContainer>
            <Avatar>
              <img src={IconAvatar} alt="avatar"/>
            </Avatar>
            <AuthorName>
              {courses.author}
            </AuthorName>
          </AuthorContainer>
          <IconWrapper>
            <img src={IconShare} alt="icon-share"/>
            <img src={IconLike} alt="icon-like"/>
          </IconWrapper>
        </InfoContainer>
      </Footer>
    </Container>
  )
};

export default CourseItem;
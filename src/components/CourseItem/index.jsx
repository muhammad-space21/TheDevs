import React from 'react';
import { useHistory } from 'react-router-dom';

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

 import IconAvatar from '../../assets/icons/avatar.png';

const CourseItem = (courses) => {
  const history = useHistory();
  const {id} = courses;
  console.log('id', id) // working

  // routeChange
  const routeChange = () => {
    history.push(`/courses/${id}`)
  };

  return (
    <Container onClick={routeChange}>
      <ImageWrapper>
        <img src={courses.image} alt="course" />
      </ImageWrapper>
      <Footer>
        <CourseTitle>
          {courses.name} 
          {/* <span>development</span>  */}
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
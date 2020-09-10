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

 import IconShare from '../../assets/icons/icon-share.svg';
 import IconLike from '../../assets/icons/icon-like.svg';

const CourseItem = (courses) => {
  const history = useHistory();
  const {id} = courses;
  const {authors} = courses;

  // routeChange
  const routeChange = () => {
    history.push(`/courses/${id}`)
  };

    const [days, hours] = courses.duration.split(' ');
    let weeks_count = Math.floor(days / 7);

  return (
    <Container onClick={routeChange}>
      <ImageWrapper>
        <img src={courses.image} alt="course" />
      </ImageWrapper>
      <Footer>
        <CourseTitle>
          {courses.name} 
        </CourseTitle>
        <Duration>
          Duration: <span>{weeks_count} weeks</span>
        </Duration>
        <InfoContainer>
          {
            authors.map(({id, image, name, lastname}) => (
            <AuthorContainer  key={id}>
              <Avatar>
                <img src={image} alt="avatar"/>
              </Avatar>
              <AuthorName>
                {name +' '+ lastname}
              </AuthorName>
            </AuthorContainer>
            ))
          }
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
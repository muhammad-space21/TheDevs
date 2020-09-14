import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { BounceInUpAnimationLong } from '../../utils/animations';

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
  IconWrapper,
  IconComponent
 } from './styles';

 import IconShare from '../../assets/icons/icon-share.svg';
 import IconLike from '../../assets/icons/icon-like.svg';


const CourseItem = (courses) => {
  const [increment, setIncrement] = useState(0);
  const history = useHistory();
  const {id} = courses;
  const {authors} = courses;

  // routeChange
  const routeChange = () => {
    history.push(`/courses/${id}`)
  };

  // Duration amount count in weeks
  const [days, hours] = courses.duration.split(' ');
  let weeks_count = Math.floor(days / 7);

  // handleIncrement
  const handleIncrement = () => {
    setIncrement(increment + 1)
  };


  return (
    <Container>
      <BounceInUpAnimationLong>
        <ImageWrapper onClick={routeChange}>
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
              <IconComponent>
                <span>{increment}</span>
                <img src={IconLike} onClick={handleIncrement} alt="icon-like"/>
              </IconComponent>
            </IconWrapper>
          </InfoContainer>
        </Footer>
      </BounceInUpAnimationLong>
    </Container>
  )
};

export default CourseItem;
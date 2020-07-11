import React from 'react';

import {
  Container, 
  TextWrapper, 
  Row, 
  HeadingOne, 
  HeadingTwo
} from './styles';

import CourseItem from '../../components/CourseItem';

import { coursesData } from '../../mockData/coursesData';

const CoursesContainer = () => {
  return (
    <Container>
      <TextWrapper>
        <HeadingOne>Courses <span>We offer</span></HeadingOne>
        <HeadingTwo>High quality<span>matters</span></HeadingTwo>
      </TextWrapper>
      <Row>
        { coursesData.map(({id, ...otherProps}) => (
          <CourseItem id={id} {...otherProps} />
        ))}
      </Row>
    </Container>
  )
};

export default CoursesContainer;
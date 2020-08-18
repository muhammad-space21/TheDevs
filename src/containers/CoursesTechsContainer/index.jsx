import React from 'react';

import { Container, Heading, Row } from './styles';

import TechItem from '../../components/TechItem';

const CoursesTechsContainer = (singleCourse) => {
  return (
    <Container>
      <Heading>The Technologies you will master in this course</Heading>
      <Row>
        {
          singleCourse.technologies.map(({id, ...otherProps}) => (
            <TechItem id={id} {...otherProps} />
          ))
        }
      </Row>
    </Container>
  )
};

export default CoursesTechsContainer;
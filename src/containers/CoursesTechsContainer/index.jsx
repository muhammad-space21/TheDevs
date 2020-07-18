import React from 'react';

import { Container, Heading, Row } from './styles';

import { technologiesData } from '../../mockData/technologiesData';

import TechItem from '../../components/TechItem';

const CoursesTechsContainer = () => {
  return (
    <Container>
      <Heading>The Technologies you will master in this course</Heading>
      <Row>
        {
          technologiesData.map(({id, ...otherProps}) => (
            <TechItem id={id} {...otherProps} />
          ))
        }
      </Row>
    </Container>
  )
};

export default CoursesTechsContainer;
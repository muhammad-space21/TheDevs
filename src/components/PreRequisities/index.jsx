import React from 'react';

import { Container, Heading, H1,  } from './styles';

import IconStar from '../../assets/icons/star.png';

const PreRequisities = () => (
  <Container>
    <Heading>
      <img src={IconStar} alt="icon" />
      <span>No prior knowledge needed</span>
    </Heading>
    <H1>
      All you need is <span> proper english </span> ,beginner-level familiarity of <span> computer-operations </span>.
    </H1>
    <H1>
      You don’t need to know anything about programming or design – everything is covered in the course.
    </H1>
  </Container>
);

export default PreRequisities; 
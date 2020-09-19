import React from 'react';

import { Container, Heading, H1,  } from './styles';

import { Text } from '../../containers/Languages';
import IconStar from '../../assets/icons/star.png';

const PreRequisities = () => (
  <Container>
    <Heading>
      <img src={IconStar} alt="icon" />
      <span><Text tid="prerequsitiesHeadingText" /></span>
    </Heading>
    <H1>
      <Text tid="prerequsitiesBodyOneText" />
    </H1>
    <H1>
      <Text tid="prerequsitiesBodyTwoText" />
    </H1>
  </Container>
);

export default PreRequisities; 
import React from 'react';

import { 
  Container, 
  TextWrapper, 
  SecondaryTitle, 
  Heading
} from './styles';

import PrimaryButton from '../PrimaryButton';

const HeaderCoursePage = (singleCourse) => {
  return (
    <Container>
      <TextWrapper>
        <Heading>The Ultimate {singleCourse.title} Course</Heading>
            <SecondaryTitle>
              {singleCourse.description}
            </SecondaryTitle>
      </TextWrapper>
      <PrimaryButton btnHeaderLong>Enroll in Course</PrimaryButton>
    </Container>
  );
};

export default HeaderCoursePage;
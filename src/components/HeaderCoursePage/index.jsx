import React from 'react';

import { 
  Container, 
  TextWrapper, 
  SecondaryTitle, 
  Heading
} from './styles';

import PrimaryButton from '../PrimaryButton';

const HeaderCoursePage = () => {
  return (
    <Container>
      <TextWrapper>
        <Heading>The Ultimate Frontend Development Course</Heading>
            <SecondaryTitle>
              Everything you need to master frontend development
              and build professional-quality websites
            </SecondaryTitle>
      </TextWrapper>
      <PrimaryButton btnHeaderLong>Enroll in Course</PrimaryButton>
    </Container>
  );
};

export default HeaderCoursePage;
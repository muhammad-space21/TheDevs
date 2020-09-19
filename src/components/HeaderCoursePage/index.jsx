import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  Container, 
  TextWrapper, 
  SecondaryTitle, 
  Heading
} from './styles';

import { Text } from '../../containers/Languages';
import LeadModalCotainer from '../../containers/LeadModalContainer';
import PrimaryButton from '../PrimaryButton';

const HeaderCoursePage = ({singleCourse}) => {
  const [showModal, setModalShow] = useState(false);

  return (
    <Container>
      <TextWrapper>
        <Heading>{singleCourse.title}</Heading>
            <SecondaryTitle>
              {singleCourse.subtitle}
            </SecondaryTitle>
      </TextWrapper>
      <PrimaryButton btnHeaderLong onClick={() => setModalShow(true)}>
        <Text tid="buttonEnrollToTheCourseText" />
      </PrimaryButton>
      {
        showModal && (
          <LeadModalCotainer open={showModal} callback={() => setModalShow(false)} />
        )
      }
    </Container>
  );
};

const mapStateToProps = (state) => ({
  singleCourse: state.singleCourseReducer.singleCourse
});

export default connect(mapStateToProps, null)(HeaderCoursePage);
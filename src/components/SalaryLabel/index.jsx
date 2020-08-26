import React from 'react';
import { connect } from 'react-redux';

import { Container, Heading } from './styles';


const SalaryLabel = ({singleCourse }) => (
  <Container>
    <Heading>
      {singleCourse.notes}
    </Heading>
  </Container>
);

const mapStateToProps = state => ({
  singleCourse: state.singleCourseReducer.singleCourse
});

export default connect(mapStateToProps, null)(SalaryLabel);
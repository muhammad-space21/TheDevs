import React from 'react';
import { connect } from 'react-redux';

import {
  Container, 
  Heading, 
  Question, 
  Answer 
} from './styles';

import IconFAQ from '../../assets/icons/question.png';
import Spinner from '../../components/Spinner';

const FAQ = ({singleCourse, loading, error}) => (
  <Container>
    <Heading>
      <img src={IconFAQ} alt="icon" />
      Frequently Asked Questions
    </Heading>
    {
      !error && !loading && singleCourse.faqs ? (
        singleCourse.faqs.map(({id, question}) => (
          <>
            <Question key={id}>{question}</Question>
              <Answer key={id}> 
                {singleCourse.faqs.answer}
              </Answer>
          </> 
        ))
      ) : (<Spinner />)
    }
  </Container>
);

const mapStateToProps = (state) => ({
  singleCourse: state.singleCourseReducer.singleCourse,
  loading: state.singleCourseReducer.loading,
  error: state.singleCourseReducer.error
});

export default connect(mapStateToProps, null)(FAQ);
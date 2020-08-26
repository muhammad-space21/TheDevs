import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {
  Container, 
  ImageWrapper, 
  Column, 
  Heading
} from './styles';

import PrimaryButton from '../PrimaryButton';
import ImageIllustration from '../../assets/images/header-webdeveloper-png.png';

const CallToActionSectionTwo = ({singleCourse}) => {
  const {title} = useParams();
  // route change
  const history = useHistory();
  const handleRouteChange = () => {
      history.push(`/article/${title}`);
  };

  return (
    <Container>
      <ImageWrapper>
        <img src={ImageIllustration} alt="illustration" />
      </ImageWrapper>
      <Column>
        <Heading>
          Why to study 
            <span> {singleCourse.name} </span>  
          in 2020, and is it worth it ?
        </Heading>
        <PrimaryButton
          btnCircle 
          onClick={handleRouteChange}
        >
          Read more
        </PrimaryButton>
      </Column>
    </Container>
  )
};

const mapStateToProps = state => ({
  singleCourse: state.singleCourseReducer.singleCourse
});

export default connect(mapStateToProps, null)(CallToActionSectionTwo);
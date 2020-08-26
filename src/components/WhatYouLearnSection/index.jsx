import React from 'react';
import { connect } from 'react-redux';

import { 
  Container,
  IllustrationWrapper1,
  IllustrationWrapper2,
  Img1,
  Img2,
  Img3,
  Img4,
  TextWrapper,
  Heading,
  SubTitle,
  BulletPoint,
  BulletPointContainer
 } from './styles';

 // img.
import IllustrationOne from '../../assets/images/circle1.png';
import IllustrationTwo from '../../assets/images/circle2.png';
import IllustrationThree from '../../assets/images/circle3.png';
import IllustrationFour from '../../assets/images/circle4.png';
import IconBullet from '../../assets/icons/pin.png';

import Spinner from '../Spinner';

const WhatYouLearnSection = ({singleCourse, loading, error}) => {
  
  return (
    <Container>
      <IllustrationWrapper1>
        <Img1><img src={IllustrationOne} alt="illustration1" /></Img1>
        <Img2><img src={IllustrationTwo} alt="illustration2" /></Img2>
      </IllustrationWrapper1>
      <TextWrapper>
        <Heading>What You'll Learn...</Heading>
        <SubTitle>
          {singleCourse.expectation_description}
        </SubTitle>
        </TextWrapper>
        <BulletPointContainer>
          {
            !loading && !error && singleCourse.expectations ? (
              singleCourse.expectations.map(({id, subtitle}) => (
                <BulletPoint key={id}>
                  <img src={IconBullet} alt="icon" />
                  <span>{subtitle}</span>
                </BulletPoint>
              ))
            ) : (<Spinner />)
          }
        </BulletPointContainer>
      <IllustrationWrapper2>
        <Img3><img src={IllustrationThree} alt="illustration3" /></Img3>
        <Img4><img src={IllustrationFour} alt="illustration4" /></Img4>
      </IllustrationWrapper2>
    </Container>
  )
};

const mapStateToProps = (state) => ({
  singleCourse: state.singleCourseReducer.singleCourse,
  loading: state.singleCourseReducer.loading,
  error: state.singleCourseReducer.error
});

export default connect(mapStateToProps, null)(WhatYouLearnSection);
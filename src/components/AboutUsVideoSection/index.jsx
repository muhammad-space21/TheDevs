import React from 'react';

import {
  Container,
  Heading,
  Video
} from './styles';

import './styles.css';

import PromoVideo  from '../../assets/videos/promo_video.mp4';
import ImagePoster from '../../assets/images/poster.jpg';

const AboutUsVideoSection = () => {
  return (
    <Container>
      <Heading>About<span>TheDevs</span></Heading>
        <Video controls={true} poster={ImagePoster} controlsList="nodownload">
          <source src={PromoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
    </Container>
  )
};

export default AboutUsVideoSection;
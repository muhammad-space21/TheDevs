import React from 'react';
import YouTube from 'react-youtube';

import { Container, Heading } from './styles';

const AboutUsVideoSection = () => {

  const opts = {
    height: '500',
    width: '850',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onReady = (e) => {
    // access to player in all event handlers via event.target
    e.target.pauseVideo();
  };

  return (
    <Container>
      <Heading> About<span>TheDevs</span> </Heading>
      <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />
    </Container>
  )
};

export default AboutUsVideoSection;
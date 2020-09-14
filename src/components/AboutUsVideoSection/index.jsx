import React from 'react';
// import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';

import {
  Container,
  Heading
} from './styles';

import './styles.css';

const AboutUsVideoSection = () => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      rel: 0
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <Container>
      <Heading>About<span>TheDevs</span></Heading>
      <div className='player-wrapper'>
        <YouTube className="react-player" videoId="0fv4D9t3tCI" opts={opts} onReady={onReady} />
      </div>
    </Container>
  )
};

export default AboutUsVideoSection;
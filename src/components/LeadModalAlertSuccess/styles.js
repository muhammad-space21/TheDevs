import styled from 'styled-components';

import VideoMaskImage from '../../assets/images/video-mask.svg';

export const Container = styled.div`
  width: 110%;
  height: 110%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  text-align: center;
  @media screen and (max-width: 550px) {
    width: 115%;
  }
`;

export const Heading = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #39E7D4;
  margin-bottom: 30px;
  margin-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  @media screen and (max-width: 550px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const VideoContainer = styled.video`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  -webkit-mask-box-image: url(${VideoMaskImage});
`;

export const BtnWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 40px;
`;
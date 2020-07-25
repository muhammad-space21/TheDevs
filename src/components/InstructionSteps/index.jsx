import React from 'react';

import { 
  Container,
  Component,
  ImageWrapper,
  TextWrapper,
  NumberWrapperYellow,
  NumberWrapperBlue,
  IconWrapper,
  BtnBackWrapper
 } from './styles';

import ImgChoose from '../../assets/images/choice.svg';
import ImgEnroll from '../../assets/images/enroll.png';
import ImgPay from '../../assets/images/pay.svg';
import ImgPlatforms from '../../assets/images/platforms-setting.svg';
import ImgStudy from '../../assets/images/study.svg';
import ImgCode from '../../assets/images/coding.svg';
import ImgProgress from '../../assets/images/progress.svg';
import ImgProgrammer from '../../assets/images/programmer.svg';
import ImgHacker from '../../assets/images/hacker.svg';
import IconBack from '../../assets/icons/back.btn.png';


const InstructionSteps = () => (
  <Container>
    <Component>
      <ImageWrapper><img src={ImgChoose} alt="illustration"/></ImageWrapper>
      <TextWrapper>
        Choose the appropriate course <br />
          that you want to study. 
      </TextWrapper>
      <NumberWrapperYellow>1</NumberWrapperYellow>
    </Component>
    <Component>
      <NumberWrapperBlue>2</NumberWrapperBlue>
      <TextWrapper>
        Sign up and register to the course,
          by clicking Enroll Button.
      </TextWrapper>
      <ImageWrapper><img src={ImgEnroll} alt="illustration"/></ImageWrapper>
    </Component>
    <Component>
      <ImageWrapper><img src={ImgPay} alt="illustration"/></ImageWrapper>
      <TextWrapper>
        Make payment with available
          methods of payment in TheDevs. 
      </TextWrapper>
      <NumberWrapperYellow>3</NumberWrapperYellow>
    </Component>
    <Component>
      <NumberWrapperBlue>4</NumberWrapperBlue>
      <TextWrapper>
        Contact with TheDevs, and
        get access to our telegram 
        bot and slack platforms.
      </TextWrapper>
      <ImageWrapper><img src={ImgPlatforms} alt="illustration"/></ImageWrapper>
    </Component>
    <Component>
      <ImageWrapper><img src={ImgStudy} alt="illustration"/></ImageWrapper>
      <TextWrapper>
        Attend our zoom sessions,
          use our platforms and study hard.
      </TextWrapper>
      <NumberWrapperYellow>5</NumberWrapperYellow>
    </Component>
    <Component>
      <NumberWrapperBlue>6</NumberWrapperBlue>
      <TextWrapper>
        Communicate with other students,
        solve challenges and assignments,
        and mainly code more !
      </TextWrapper>
      <ImageWrapper><img src={ImgCode} alt="illustration"/></ImageWrapper>
    </Component>
    <Component>
      <ImageWrapper><img src={ImgProgress} alt="illustration"/></ImageWrapper>
      <TextWrapper>
        Make an outstanding portfolio, 
        and master all the technologies
        in the course you enrolled.
      </TextWrapper>
      <NumberWrapperYellow>7</NumberWrapperYellow>
    </Component>
    <Component>
      <NumberWrapperBlue>8</NumberWrapperBlue>
      <TextWrapper>
        And finally become a programmer !
      </TextWrapper>
      <ImageWrapper><img src={ImgProgrammer} alt="illustration"/></ImageWrapper>
    </Component>
    <IconWrapper>
      <img src={ImgHacker} alt="illustration" />
      Good luck in your journey.
    </IconWrapper>
    <BtnBackWrapper to="/">
      <img src={IconBack} alt="back-btn"/>
      back
    </BtnBackWrapper>
  </Container>
);

export default InstructionSteps;
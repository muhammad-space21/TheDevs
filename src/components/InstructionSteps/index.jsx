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

 import { Text } from '../../containers/Languages';

 // img.
import ImgChoose from '../../assets/images/choice.svg';
import ImgEnroll from '../../assets/images/enroll.png';
import ImgPay from '../../assets/images/payment.svg';
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
      <ImageWrapper>
        <img src={ImgChoose} alt="illustration"/>
      </ImageWrapper>
      <TextWrapper>
        <Text tid="instructionStepsOneText" />
      </TextWrapper>
      <NumberWrapperYellow>1</NumberWrapperYellow>
    </Component>
    <Component>
      <NumberWrapperBlue>2</NumberWrapperBlue>
      <TextWrapper>
        <Text tid="instructionStepsTwoText" />
      </TextWrapper>
      <ImageWrapper>
        <img src={ImgEnroll} alt="illustration"/>
      </ImageWrapper>
    </Component>
    <Component>
      <ImageWrapper>
        <img src={ImgPay} alt="illustration"/>
      </ImageWrapper>
      <TextWrapper>
        <Text tid="instructionStepsThreeText" />
      </TextWrapper>
      <NumberWrapperYellow>3</NumberWrapperYellow>
    </Component>
    <Component>
      <NumberWrapperBlue>4</NumberWrapperBlue>
      <TextWrapper>
        <Text tid="instructionStepsFourText" />
      </TextWrapper>
      <ImageWrapper>
        <img src={ImgPlatforms} alt="illustration"/>
      </ImageWrapper>
    </Component>
    <Component>
      <ImageWrapper>
        <img src={ImgStudy} alt="illustration"/>
      </ImageWrapper>
      <TextWrapper>
        <Text tid="instructionStepsFiveText" />
      </TextWrapper>
      <NumberWrapperYellow>5</NumberWrapperYellow>
    </Component>
    <Component>
      <NumberWrapperBlue>6</NumberWrapperBlue>
      <TextWrapper>
        <Text tid="instructionStepsSixText" />
      </TextWrapper>
      <ImageWrapper>
        <img src={ImgCode} alt="illustration"/>
      </ImageWrapper>
    </Component>
    <Component>
      <ImageWrapper>
        <img src={ImgProgress} alt="illustration"/>
      </ImageWrapper>
      <TextWrapper>
        <Text tid="instructionStepsSevenText" />
      </TextWrapper>
      <NumberWrapperYellow>7</NumberWrapperYellow>
    </Component>
    <Component>
      <NumberWrapperBlue>8</NumberWrapperBlue>
      <TextWrapper>
        <Text tid="instructionStepsEightText" />
      </TextWrapper>
      <ImageWrapper>
        <img src={ImgProgrammer} alt="illustration"/>
      </ImageWrapper>
    </Component>
    <IconWrapper>
      <img src={ImgHacker} alt="illustration" />
      <Text tid="instructionStepsNineText" /> 👍
    </IconWrapper>
    <BtnBackWrapper to="/">
      <img src={IconBack} alt="back-btn"/>
      <Text tid="backText" />
    </BtnBackWrapper>
  </Container>
);

export default InstructionSteps;
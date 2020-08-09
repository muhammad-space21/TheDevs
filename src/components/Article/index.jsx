import React from 'react';

import { 
  Container, 
  Row, 
  TextWrapper, 
  ImageWrapper,
  ImgSmall,
  ImageCenter,
  BtnBackWrapper,
  TextWrapper2,
  HR,
  HRHide
} from './styles';

import JoinITCommunitySection from '../JoinITCommunitySection';

import Image1 from '../../assets/illustrations/boy.svg';
import Image2 from '../../assets/illustrations/computer.svg';
import Image3 from '../../assets/illustrations/girl.svg';
import Image4 from '../../assets/illustrations/progress.svg';
import Image5 from '../../assets/illustrations/rocket.svg';
import Image6 from '../../assets/illustrations/setup.png';
import Image7 from '../../assets/illustrations/lovecode.png';
import IconBack from '../../assets/icons/back.btn.png';


const Article = () => {
  return (
    <Container>
      <Row>
        <TextWrapper2>
          <span>
            There has never been a better time to learn to code or make a career change to software 
            engineering. The demand for web developers is at an all-time high, and it’s only increasing. 
            There are both free and premium tutorials online that teach you the skills to get a job as a 
            developer — no CS degree required 🤓.
          </span>
          <HR /> 
        </TextWrapper2>
      </Row>
      <Row>
        <TextWrapper>
          <span>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled 
            it to make a type specimen book. It has survived not 
            only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. 
          </span>
        </TextWrapper>
        <ImageWrapper>
          <img src={Image1} alt="boy"/>
        </ImageWrapper>
      </Row>
      <HRHide />
      <Row>
        <ImageWrapper>
          <img src={Image2} alt="computer"/>
        </ImageWrapper>
        <TextWrapper>
        <span>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled 
            it to make a type specimen book. It has survived not 
            only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. 
          </span>
        </TextWrapper>
      </Row>
      <HRHide />
      <Row>
        <TextWrapper>
          <span>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled 
            it to make a type specimen book. It has survived not 
            only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. 
          </span>
        </TextWrapper>
        <ImageWrapper>
          <img src={Image3} alt="girl"/>
        </ImageWrapper>
      </Row>
      <HRHide />
      <Row>
      <ImageWrapper>
        <ImgSmall>
          <img src={Image4} alt="progress"/>
        </ImgSmall>
      </ImageWrapper>
        <TextWrapper>
          <span>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled 
            it to make a type specimen book. It has survived not 
            only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. 
          </span>
        </TextWrapper>
      </Row>
      <HRHide />
      <Row>
        <TextWrapper>
          <span>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled 
            it to make a type specimen book. It has survived not 
            only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. 
          </span>
        </TextWrapper>
        <ImageWrapper>
          <ImgSmall>
            <img src={Image5} alt="rocket"/>
          </ImgSmall>
        </ImageWrapper>
      </Row>
      <HRHide />
      <Row>
        <ImageWrapper>
          <img src={Image6} alt="setup"/>
        </ImageWrapper>
        <TextWrapper>
          <span>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled 
            it to make a type specimen book. It has survived not 
            only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. 
          </span>
        </TextWrapper>
      </Row>
      <HRHide />
      <ImageCenter>
        <img src={Image7} alt="loveCode"/>
      </ImageCenter>
      <JoinITCommunitySection />
      <BtnBackWrapper to="/">
        <img src={IconBack} alt="back-btn"/>
        back
      </BtnBackWrapper>
    </Container>
  )
};

export default Article;
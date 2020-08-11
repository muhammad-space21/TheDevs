import React from 'react';

import {
  Container, 
  ImageCenter, 
  BtnBackWrapper, 
  NoticeBoard, 
  TextWrapper 
} from './styles';

import Navbar from '../../components/Navbar';
import HeaderPricingPlanPage from '../../components/HeaderPricingPlanPage';
import PricingServiceCardsContainer from '../../containers/PricingServiceCardsContainer';
import JoinITCommunitySection from '../../components/JoinITCommunitySection';
import Footer from '../../components/Footer';

import IconBack from '../../assets/icons/back.btn.png';
import ImageLoveCode from '../../assets/illustrations/lovecode.png';
import IconHash from '../../assets/icons/hashtag.png';


const PricingPlanPage = () => {
  return (
    <Container>
      <Navbar />
      <HeaderPricingPlanPage />
      <PricingServiceCardsContainer />
      <NoticeBoard>
        <TextWrapper>
          <img src={IconHash} alt="icon-hash" />
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
        </TextWrapper>
        <TextWrapper>
          <img src={IconHash} alt="icon-hash" />
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
        </TextWrapper>
        <TextWrapper>
          <img src={IconHash} alt="icon-hash" />
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
        </TextWrapper>
      </NoticeBoard>
      <ImageCenter>
        <img src={ImageLoveCode} alt="loveCode" />
      </ImageCenter>
      <JoinITCommunitySection />
      <BtnBackWrapper to="/">
        <img src={IconBack} alt="back-btn" />
        back
      </BtnBackWrapper>
      <Footer />
    </Container>
  )
};

export default PricingPlanPage;
import styled from 'styled-components';

import BackgorundImage from '../../assets/images/background-aboutpage.png';


export const Container = styled.div`
  width: 100vw;
  height: 83vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgorundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 100px;
  @media screen and (max-width: 550px) {
    margin-top: 80px;
    height: 70vh;
  }
`;

export const TextWrapper = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 991px) {
    width: 90%;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    margin-bottom: 0;
  }
`;

export const Heading = styled.span`
  width: fit-content;
  font-size: 48px;
  letter-spacing: 0px;
  color: white;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  @media screen and (max-width: 991px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 35px;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;
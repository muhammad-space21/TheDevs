import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: 83vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent linear-gradient(119deg, #009FFF 0%, #EC2F4B 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
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
  margin-bottom: 50px;
  /* border: 2px solid red; */
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
  font-size: 38px;
  letter-spacing: 0px;
  color: white;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  @media screen and (max-width: 991px) {
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 550px) {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

export const SecondaryTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 22px;
  letter-spacing: 0px;
  color: white;
  font-weight: 400;
  /* border: 2px solid red; */
  @media screen and (max-width: 768px) {
    font-size: 19px;
    line-height: 22px;
  }
  @media screen and (max-width: 550px) {
    font-size: 16px;
    line-height: 19px;
  }
  @media screen and (min-width: 991px) {
    width: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 550px) {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 30px;
  }
`;
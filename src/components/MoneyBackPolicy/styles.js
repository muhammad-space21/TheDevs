import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 50px;
  @media screen and (max-width: 768px) {
    padding: 30px;
    padding-bottom: 50px;
    padding-top: 50px;
  }
  @media screen and (max-width: 550px) {
    padding: 20px;
    padding-bottom: 50px;
    padding-top: 50px;
  }
`;

export const Heading = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
  @media screen and (max-width: 550px) {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const SubTitle = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 20px;
  @media screen and (max-width: 550px) {
    font-size: 18px;
  }
`;

export const TextWrapper = styled.div`
  width: 60%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 30px;
  font-weight: 400;
  color: black;
  text-align: center;
  margin-bottom: 30px;
  @media screen and (max-width: 991px) {
    width: 80%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const IconWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: auto;
  }
`;
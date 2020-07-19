import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #F9F9F9;
  padding-bottom: 80px;
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
  width: 60%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  font-size: 30px;
  font-weight: 500;
  color: black;
  margin-bottom: 20px;
  img {
    width: 45px;
    height: auto;
    margin-right: 20px;
    @media screen and (max-width: 550px) {
      width: 35px;
      height: auto;
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 991px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    font-size: 25px;
    width: 90%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    font-size: 20px;
  }
`;

export const Question = styled.div`
  width: 60%; 
  font-size: 22px;
  font-weight: 500;
  color: black;
  margin-bottom: 15px;
  margin-top: 20px;
  @media screen and (max-width: 991px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 20px;
  }
  @media screen and (max-width: 550px) {
    font-size: 18px;
    width: 100%;
  }
`;

export const Answer = styled.div`
  width: 60%; 
  font-size: 19px;
  font-weight: 400;
  color: black;
  @media screen and (max-width: 991px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 17px;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    font-size: 16px;
  }
`;
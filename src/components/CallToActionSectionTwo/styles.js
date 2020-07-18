import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  padding: 50px;
  background-color: #2669FF;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  height: fit-content;
  img {
    width: 90%;
    height: auto;
    @media screen and (max-width: 768px) {
      height: 40%;
    }
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-bottom: 30px;
  }
`;

export const Column = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Heading = styled.div`
  font-size: 27px;
  font-weight: 500;
  color: white;
  font-style: italic;
  line-height: 40px;
  text-align: center;
  margin-bottom: 30px;
  @media screen and (max-width: 991px) {
    font-size: 22px;
    line-height: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 25px;
  }

  span {
    font-size: 27px;
    line-height: 40px;
    font-weight: 500;
    color: #FFCA01;
    font-style: italic;
    @media screen and (max-width: 991px) {
      font-size: 24px;
      line-height: 30px;
    }
    @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 25px;
  }
  }
`;
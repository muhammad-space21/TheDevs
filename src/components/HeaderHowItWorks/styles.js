import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 83vh;
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  margin-bottom: 50px;
  @media screen and (max-width: 550px) {
    margin-top: 80px;
    height: 60vh;
  }
`;

export const Col1 = styled.div`
  width: 50%;
  height: 100%;
  background-color: #7054FF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Col2 = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 80%;
    width: auto;
    @media screen and (max-width: 768px) {
      height: 50%;
    }
    @media screen and (max-width: 550px) {
      height: 40%;
    }
  }
`;

export const Heading = styled.div`
  width: 80%;
  height: fit-content;
  text-align: center;
  font-style: italic;
  font-size: 50px;
  font-weight: 600;
  color: white;
  line-height: 60px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    font-weight: 500;
    line-height: 40px;
  }
  @media screen and (max-width: 550px) {
    width: 85%;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
  }
`;
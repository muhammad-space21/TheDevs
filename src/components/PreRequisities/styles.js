import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 50px;
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: #F9F9F9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Heading = styled.div`
  width: 65%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  /* border: 2px solid red; */
  @media screen and (max-width: 768px) {
   width: 90%;
  }
  img {
    width: 30px;
    height: auto;
    margin-right: 20px;
  }
  span {
    font-size: 22px;
    font-weight: 500;
    color: black;
    @media screen and (max-width: 768px) {
      font-size: 19px;
    }
  }
`;

export const H1 = styled.div`
  width: 100%;
  font-size: 18px;
  margin-top: 15px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px solid red; */
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }

`;
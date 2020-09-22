import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #F4f7f6;
  padding: 50px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    padding: 30px;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const HeadingOne = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 22px;
  font-style: italic;
  font-weight: 600;
  color: #08D0BD;
  span {
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    margin-left: 10px;
    color: black;
    @media screen and (max-width: 550px) {
      font-size: 18px;
      margin-left: 6px;
    }
  }
  @media screen and (max-width: 550px) {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

export const HeadingTwo = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 22px;
  font-style: italic;
  font-weight: 600;
  color: #08D0BD;
  span {
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    margin-left: 10px;
    color: black;
    @media screen and (max-width: 550px) {
      font-size: 18px;
      margin-left: 6px;
    }
  }
  @media screen and (max-width: 550px) {
    font-size: 20px;
    font-weight: 500;
  }
`;
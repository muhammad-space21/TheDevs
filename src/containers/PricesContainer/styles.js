import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #7054FF;
  @media screen and (max-width: 1200px) {
    padding: 30px;
  }
  @media screen and (max-width: 991px) {
    padding: 20px;
  }
`;

export const Heading = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  font-size: 22px;
  line-height: 24px;
  font-weight: 500;
  color: white;
  margin-bottom: 50px;
  text-align: center;
  span {
    color: #FF7A59;
    font-size: 22px;
    line-height: 24px;
    font-weight: 500;
    margin-top: 10px;
  }
  @media screen and (max-width: 991px) {
    margin-top: 30px;
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
  @media screen and (max-width: 991px) {
    margin-top: 20px;
  }
`;
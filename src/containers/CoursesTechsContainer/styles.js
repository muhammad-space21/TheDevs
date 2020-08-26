import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F4F7F6;
  padding: 50px;
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
`;

export const Heading = styled.div`
  font-size: 22px;
  font-weight: 600;
  font-style: italic;
  margin-bottom: 50px;
  text-align: center;
  @media screen and (max-width: 550px) {
    font-size: 20px;
    font-weight: 500;
  }
`;
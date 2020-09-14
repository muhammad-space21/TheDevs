import styled from 'styled-components';

export const Container = styled.div`
  height: fit-content;
  padding-left: 150px;
  padding-right: 150px;
  padding-top: 50px;
  padding-bottom: 50px;
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;

export const Heading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 700;
  color: black;
  line-height: 28px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 550px) {
    margin-bottom: 30px;
  }
  span {
    color: #FFD52E;
    margin-left: 5px;
    margin-right: 5px;
    font-weight: 1000;
    font-size: 25px;
  }
`;
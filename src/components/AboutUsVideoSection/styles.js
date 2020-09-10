import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Heading = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: black;
  line-height: 28px;
  margin-bottom: 50px;
  span {
    color: #FFD52E;
    margin-left: 5px;
    margin-right: 5px;
    font-weight: 1000;
    font-size: 25px;
  }
`;
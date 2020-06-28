import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background: #2669FF 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  flex-direction: column;
  /* border: 2px solid black; */
  padding-left: 50px;
  padding-right: 50px;
`;

export const Row = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  /* border: 2px solid red; */
`;

export const Row2 = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
  color: #1EE5CF;
  font-weight: 600;
  cursor: pointer;
  padding-top: 30px;
  /* border: 2px solid black; */
  span {
    color: white;
    font-size: 20px;
    font-weight: 600;
    margin-left: 5px;
    text-transform: uppercase;
  }
`;


export const Col1 = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid pink; */
`;

export const TextWrapper = styled.div`
  width: 30%; 
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const SubRow = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  /* border: 2px solid yellow; */
  /* padding-left: 30px; */
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
`;

export const SubCol = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  /* border: 2px solid red; */
`;

export const SubCol2 = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  /* border: 2px solid red; */
  align-self: flex-start;
  margin-top: 50px;
`;

export const Heading = styled.span`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #F5F8FA;
  opacity: 1;
  margin-bottom: 10px;
`;

export const Links = styled(Link)`
  font-size: 18px;
  font-weight: 400;
  color: #F5F8FA;
  cursor: pointer;
  margin-bottom: 5px;
  &:hover {
    color: #F5F8FA;
    text-decoration: none;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid black; */
  img {
    width: 70%;
    height: auto;
    margin-left: auto;
  }
`;

export const HR = styled.div`
  width: 100%;
  border-bottom: 1.5px solid #FFFFFF;
  margin-top: 50px;
`;

export const H6 = styled.h6`
  font-size: 14px;
  color: #F5F8FA;
  font-weight: 300;
  margin-top: 20px;
  margin-bottom: 20px;
`;
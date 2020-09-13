import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background: #2669FF 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-right: 50px;
  @media screen and (max-width: 550px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const Row2 = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const Brand = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: #1EE5CF;
  font-weight: 600;
  cursor: pointer;
  padding-top: 30px;
  span {
    color: white;
    font-size: 20px;
    font-weight: 600;
    margin-left: 5px;
    text-transform: uppercase;
    &:hover {
      text-decoration: none;
      color: white;
    }
  }
  &:hover {
    text-decoration: none;
    color: #1EE5CF;
  }
  @media screen and (max-width: 550px) {
    flex-wrap: wrap;
  }
`;

export const SocialMedia = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
  @media screen and (max-width: 550px) {
    width: 300px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }
`;


export const Col1 = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1100px) {
    width: 60%;
  }
  @media screen and (max-width: 991px) {
   width: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: 30%; 
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (max-width: 550px) {
   width: 100%;
   order: 1;
   justify-content: space-between;
  }
`;

export const SubRow = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
`;

export const SubCol = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const SubCol2 = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-top: 50px;
  @media screen and (max-width: 991px) {
    align-self: center;
  }
`;

export const Heading = styled.span`
  font-size: 19px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #F5F8FA;
  opacity: 1;
  margin-bottom: 10px;
  @media screen and (max-width: 550px) {
    font-size: 17px;
  }
`;

export const Links = styled(Link)`
  font-size: 18px;
  font-weight: 400;
  color: #F5F8FA;
  cursor: pointer;
  margin-bottom: 5px;
  transition: 0.5s;
  &:hover {
    color: #FFD52E;
    text-decoration: none;
  }
  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;

export const Hashlink = styled(HashLink)`
  font-size: 18px;
  font-weight: 400;
  color: #F5F8FA;
  cursor: pointer;
  margin-bottom: 5px;
  transition: 0.5s;
  &:hover {
    color: #FFD52E;
    text-decoration: none;
  }
  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;

export const Tel = styled.a`
  font-size: 18px;
  font-weight: 400;
  color: #F5F8FA;
  cursor: pointer;
  margin-bottom: 5px;
  transition: 0.5s;
  &:hover {
    color: #FFD52E;
    text-decoration: none;
  }
  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1100px) {
    width: 40%;
    img {
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
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

export const H6 = styled(Link)`
  font-size: 14px;
  color: #F5F8FA;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: #FFD52E;
    text-decoration: none;
  }
`;

export const H7 = styled.h6`
  font-size: 14px;
  color: #F5F8FA;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  @media screen and (max-width: 550px) {
    order: 2;
    margin-top: 0;
    align-self: start;
  }
`;
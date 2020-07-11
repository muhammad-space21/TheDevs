import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 991px) {
    width: 40%;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 748px) {
    width: 45%;
  }
  @media screen and (max-width: 600px) {
    width: 75%;
  }
  @media screen and (max-width: 550px) {
    width: 95%;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 37vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 991px) {
    height: 34vh;
  }
  @media screen and (max-width: 748px) {
    height: 30vh;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
`;

export const CourseTitle = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 600;
  color: black;
  font-style: italic;
  margin-top: 20px;
  span {
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    margin-left: 10px;
  }
`;

export const Duration = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  margin-left: 10px;
  margin-top: 20px;
  span {
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    color: black;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const AuthorContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1.5px solid #2669FF;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
    height: auto;
  }
`;

export const AuthorName = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-left: 10px;
`;

export const IconWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    width: 25px;
    height: auto;
    margin-left: 20px;
    cursor: pointer;
  }
`;


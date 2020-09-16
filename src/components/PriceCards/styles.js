import styled from 'styled-components';


export const Container = styled.div`
  width: 25%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 13px;
  cursor: pointer;
  background-color: #F4F7F6;
  padding: 30px;
  margin-bottom: 60px;
  position: relative;
  @media screen and (max-width: 991px) {
    width: 28%;
  }
  @media screen and (max-width: 930px) {
    width: 40%;
  }
  @media screen and (max-width: 680px) {
    width: 45%;
  }
  @media screen and (max-width: 600px) {
    width: 60%;
  }
  @media screen and (max-width: 550px) {
    width: 70%;
  }
  @media screen and (max-width: 450px) {
    width: 80%;
  }
  img {
    width: 125px;
    height: 130px;
    position: absolute;
    margin-top: 145px;
    margin-left: 80px;
    -webkit-transition: all .4s ease-out 0s;
    -moz-transition: all .4s ease-out 0s;
    -ms-transition: all .4s ease-out 0s;
    -o-transition: all .4s ease-out 0s;
    transition: all .4s ease-out 0s;
    @media screen and (max-width: 1200px) {
      margin-left: 60px;
    }
  }
`;

export const Price = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: black;
  margin-bottom: 20px;
  span {
    font-size: 22px;
    font-weight: 700;
    color: #FC4062;
    margin-right: 8px;
  }
  h1 {
    font-size: 22px;
    font-weight: 600;
    color: black;
    margin-right: 8px;
    margin-left: 8px;
    margin-top: 10px;
    text-decoration: line-through;
  }
`;

export const Hr = styled.div`
  width: 100%;
  border-bottom: 1.5px solid #1EE5CF;
  margin-bottom: 20px;
`;

export const CourseName = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 600;
  color: #7054FF;
  margin-bottom: 10px;
`;

export const Pros = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
  span {
    font-size: 14px;
    font-weight: 500;
    color: #807C7C;
    margin-top: 8px;
  }
`;


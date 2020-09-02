import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #F5F8FA;
  padding: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const AvatarContainer = styled.div`
  width: 40%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-size: 30px;
    font-weight: 600;
    color: black;
    margin-bottom: 20px;
    @media screen and (max-width: 550px) {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;

export const Avatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 200px;
  border: 5px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InstructorName = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: black;
`;

export const TextWrapper = styled.div`
  width: 40%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  color: black;
  /* border: 2px solid red; */
  @media screen and (max-width: 991px) {
    width: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-top: 30px;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


export const NavbarStyled = styled(Navbar)`
  width: 100vw;
  height: 100px;
  background-color: #F4F7F6;
  position: fixed;
  z-index: 100;
  font-family: 'Varela Round', sans-serif;
  @media screen and (max-width: 550px) {
    height: 80px;
  }
`;

export const NavStyled = styled(Nav)`
  width: 60vw; 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 888;
    @media screen and (max-width: 991px) {
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: #F4F7F6;
      height: 75vh;
      margin: 0;
      padding: 0;
    }
`;

export const NavbarCollapse = styled(Navbar.Collapse)`
  z-index: 888;
`;

export const NavLinkHide = styled(HashLink)`
  display: none;
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
    cursor: pointer; 
    text-decoration: none;
  }
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

export const NavLinkCustom = styled(HashLink)`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: black;
  margin-right: 30px;
  text-decoration: none;
  &:hover {
    color: black;
    cursor: pointer;
    text-decoration: none;
    &::before {
      width: 70px;
    }
  }
  &::before {
    position: absolute;
    content: "";
    bottom: 20px;
    background-color: #1EE5CF;
    height: 7px;
    width: 0;
    transition: .3s;
    border-radius: 5px;
    @media screen and (max-width: 991px) {
      display: none;
    }
  }
  @media screen and (max-width: 991px) {
    margin-right: 0;
    margin-bottom: -32px;
    &:hover {
      color: #1EE5CF;
      cursor: pointer;
    }
  }
`;

export const NavLinkStyledDropdown = styled(Link)`
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  margin-left: 10px;
    &:hover {
      cursor: pointer;
      color: #1EE5CF; 
      text-decoration: none;
    }
  @media screen and (max-width: 1100px) {
    padding-right: 20px;
  }
  @media screen and (max-width: 991px) {
    margin-right: 0;
    display: none;
  }
`;

export const NavLinkStyled = styled(HashLink)`
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  color: black;
  margin-right: 30px;
  text-decoration: none;
  &:hover {
    color: black;
    cursor: pointer;
    text-decoration: none;
    &::before {
      width: 70px;
    }
  }
  &::before {
    position: absolute;
    content: "";
    bottom: 20px;
    background-color: #1EE5CF;
    height: 7px;
    width: 0;
    transition: .3s;
    border-radius: 5px;
    @media screen and (max-width: 991px) {
      display: none;
    }
  }
  @media screen and (max-width: 991px) {
    margin-right: 0;
    &:hover {
      color: black;
      cursor: pointer;
    }
  }
  img {
    width: 40px;
    height: 40px;
  }
`;

export const NavItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen 
  and (min-width: 991px) 
  and (max-width: 1100px) {
    display: none;
  }
  &:hover {
    text-decoration: none;
  }
  img {
    width: 20px;
    height: 20px;
    @media screen and (max-width: 991px) {
      margin-top: 20px;
    }
  }
  a {
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    color: #ffffff;
    margin-left: 15px;
    font-family: 'Montserrat', sans-serif;
    &:hover {
      text-decoration: none;
    }
    @media screen and (max-width: 991px) {
      margin-left: 10px;
      margin-top: 20px;
      &:hover {
        color: #00AF66;
      }
        img {
          width: 30px;
          height: 30px;
        }
      }
  }
`;

export const NavbarBrand = styled(Navbar.Brand)`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  img {
    width: auto;
    height: 25px;
    @media screen and (max-width: 550px) {
      width: auto;
      height: 20px;
    }
  }
`;

export const NavbarToggle = styled(Navbar.Toggle)`
  margin-left: auto;
  margin-right: 5px;
  margin-top: auto;
  margin-bottom: auto;
  &:focus {
    outline: none;
  }
  img {
    width: 35px;
    height: 20px;
    @media screen and (max-width: 550px) {
      width: 30px;
      height: 15px;
    }
  }
`;

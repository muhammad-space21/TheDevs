import React from 'react';

import {
  NavbarStyled, 
  NavStyled, 
  NavLinkStyledDropdown,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavLinkHide,
  NavLinkCustom
} from './styles';

import './styles.scss';

import ButtonPrimary from '../../components/PrimaryButton';
import IconMenu from '../../assets/icons/menu-mobile.png';

export const NavbarMain = () => {
  return (
    <NavbarStyled bg='default' variant='default' expand="lg">
      <NavbarBrand href="/"> 
        The <span>Devs</span>
      </NavbarBrand>
      <NavbarToggle aria-controls="responsive-navbar-nav">
        <img src={IconMenu} alt="menu"/>
      </NavbarToggle>
        <NavbarCollapse id="responsive-navbar-nav">
          <NavStyled className="ml-auto">
            <NavLinkCustom to="/">Home</NavLinkCustom>
            <NavLinkCustom to="/how-it-works">Process</NavLinkCustom>
            <NavLinkCustom to="/about">About</NavLinkCustom>
            <li>
              <NavLinkCustom className='nav-item' to="#1">Courses</NavLinkCustom>
              <ul className="sub-menu">
                <NavLinkStyledDropdown to="/courses/1">Frontend development</NavLinkStyledDropdown>
                <NavLinkStyledDropdown to="/courses/2">Backend development</NavLinkStyledDropdown>
                <NavLinkStyledDropdown to="/courses/3">Mobile development</NavLinkStyledDropdown>
              </ul>
            </li>
              <NavLinkHide to="/courses/1">Frontend development</NavLinkHide>
              <NavLinkHide to="/courses/2">Backend development</NavLinkHide>
              <NavLinkHide to="/courses/3">Mobile development</NavLinkHide>
            <NavLinkCustom to="#3">Prices</NavLinkCustom>
            <ButtonPrimary btnEnrollNavbar><span>enroll to the course</span></ButtonPrimary>
          </NavStyled>
        </NavbarCollapse>
    </NavbarStyled>
  );
};

export default NavbarMain;

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
            <NavLinkCustom to="/">About</NavLinkCustom>
            <li>
              <NavLinkCustom className='nav-item' to="#1">Courses</NavLinkCustom>
              <ul className="sub-menu">
                <NavLinkStyledDropdown to="/">Frontend development</NavLinkStyledDropdown>
                <NavLinkStyledDropdown to="/">Backend development</NavLinkStyledDropdown>
                <NavLinkStyledDropdown to="/">Mobile development</NavLinkStyledDropdown>
              </ul>
            </li>
              <NavLinkHide to="/">Frontend development</NavLinkHide>
              <NavLinkHide to="/">Backend development</NavLinkHide>
              <NavLinkHide to="/">Mobile development</NavLinkHide>
            <NavLinkCustom to="/">Prices</NavLinkCustom>
            <ButtonPrimary btnEnrollNavbar>enroll to the course</ButtonPrimary>
          </NavStyled>
        </NavbarCollapse>
    </NavbarStyled>
  );
};

export default NavbarMain;

import React, { useState } from 'react';

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

import LeadModalContainer from '../../containers/LeadModalContainer';
import ButtonPrimary from '../PrimaryButton';
import LanguageSelector from '../LanguageSelector';

import IconMenu from '../../assets/icons/menu-mobile.png';
import LogoBrand from '../../assets/icons/logo.png';

export const NavbarMain = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <NavbarStyled bg='default' variant='default' expand="lg">
      <NavbarBrand href="/"> 
        <img src={LogoBrand} alt="logo" />
      </NavbarBrand>
      <NavbarToggle aria-controls="responsive-navbar-nav">
        <img src={IconMenu} alt="menu" />
      </NavbarToggle>
        <NavbarCollapse id="responsive-navbar-nav">
          <NavStyled className="ml-auto">
          <LanguageSelector />
            <NavLinkCustom to="/">Home</NavLinkCustom>
            <NavLinkCustom to="/how-it-works">Process</NavLinkCustom>
            <NavLinkCustom to="/about">About</NavLinkCustom>
            <li>
              <NavLinkCustom className='nav-item' to="#1">Courses</NavLinkCustom>
              <ul className="sub-menu">
                <NavLinkStyledDropdown to="/courses/1">Frontend development</NavLinkStyledDropdown>
                <NavLinkStyledDropdown to="/courses/2">Backend development</NavLinkStyledDropdown>
                <NavLinkStyledDropdown to="/courses/3">UI/UX Design</NavLinkStyledDropdown>
              </ul>
            </li>
              <NavLinkHide to="/courses/1">Frontend development</NavLinkHide>
              <NavLinkHide to="/courses/2">Backend development</NavLinkHide>
              <NavLinkHide to="/courses/3">UI/UX Design</NavLinkHide>
            <NavLinkCustom to="#3">Prices</NavLinkCustom>
            <ButtonPrimary 
              onClick={() => setShowModal(true)} 
              btnEnrollNavbar
            >
              <span>enroll to the course</span>
            </ButtonPrimary>
          </NavStyled>
        </NavbarCollapse>
        {
          showModal && (
            <LeadModalContainer callback={() => setShowModal(false)} open={showModal} />
          )
        }
    </NavbarStyled>
  );
};

export default NavbarMain;

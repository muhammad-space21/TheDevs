import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

import { Text } from '../../containers/Languages';

import LeadModalContainer from '../../containers/LeadModalContainer';
import ButtonPrimary from '../PrimaryButton';
import SpinnerSmall from '../SpinnerSmall';
import LanguageSelector from '../LanguageSelector';

import IconMenu from '../../assets/icons/menu-mobile.png';
import LogoBrand from '../../assets/icons/logo.png';

export const NavbarMain = ({ courses, loading }) => {
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
            <NavLinkCustom to="/"><Text tid="navbarHomeText"/></NavLinkCustom>
            <NavLinkCustom to="/how-it-works"><Text tid="navbarProcessText"/></NavLinkCustom>
            <NavLinkCustom to="/about"><Text tid="navbarAboutText"/></NavLinkCustom>
            <li>
              <NavLinkCustom className='nav-item' to="#1"><Text tid="navbarCoursesText"/></NavLinkCustom>
              <ul className="sub-menu">
                {
                  !loading && courses.length ? (courses.map(({id, name}) => (
                    <NavLinkStyledDropdown key={id} to={`courses/${id}`}>{name}</NavLinkStyledDropdown>
                  ))
                  ) : (<SpinnerSmall />)
                }
              </ul>
            </li>
            {
              !loading && courses.length ? (courses.map(({id, name}) => (
                <NavLinkHide key={id} to={`courses/${id}`}>{name}</NavLinkHide>
              ))
              ) : (<SpinnerSmall />)
            }
            <NavLinkCustom to="#3"><Text tid="navbarPriceText"/></NavLinkCustom>
            <LanguageSelector />
            <ButtonPrimary 
              onClick={() => setShowModal(true)} 
              btnEnrollNavbar
            >
              <span><Text tid="buttonEnrollToTheCourseText"/></span>
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

const defaultState = {
  loading: false,
  courses: {}
};

NavbarMain.propTypes = {
  loading: PropTypes.bool.isRequired,
  // courses: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.coursesReducer.loading,
  courses: state.coursesReducer.courses
});

export default connect(mapStateToProps, null)(NavbarMain);

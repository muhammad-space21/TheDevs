import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import  { init, tokenLocalToRedux } from '../../redux/modules/auth/authAction';

import SpinnerMain from '../../components/SpinnerMain';


const Auth = ({
  children,
  token,
  error,
  loading,
  init,
  tokenLocalToRedux
}) => {

  const localToken = localStorage.getItem('token'); 
  
  console.log(localToken, 'local-token');
  
  useEffect(() => {
    // if (!token && localToken) {
    //   tokenLocalToRedux(localToken);
    // };

    // if (!token && !loading && !error && !localToken) {
    //   init();
    // };
    init();
  }, []); // not working

  return (
    <>
      {loading && <SpinnerMain />}
      {!loading && token && children}
    </>
  )
};

Auth.defaultProps = {
  children: '',
  init: () => {},
  tokenLocalToRedux: () => {},
  token: '',
  loading: false,
  error: false
};


Auth.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  init: PropTypes.func.isRequired,
  tokenLocalToRedux: PropTypes.func.isRequired,
  // token: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool
};


const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  error: state.authReducer.error,
  token: state.authReducer
});

const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(init()),
  tokenLocalToRedux: (token) => dispatch(tokenLocalToRedux(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
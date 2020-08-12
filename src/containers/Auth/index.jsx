import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import  { init, tokenLocalToRedux } from '../../redux/modules/auth/authAction';

import Spinner from '../../components/Spinner';


const Auth = ({
  children,
  token,
  error,
  loading,
  init,
  tokenLocalToRedux
}) => {
  const localToken = localStorage.getItem('token');

  if (!token && localToken) {
    tokenLocalToRedux(localToken);
  };

  if (!token && !loading && !error && !localToken) {
    init();
  };

  return (
    <>
      {loading && <Spinner />}
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
  ]),
  init: PropTypes.func,
  tokenLocalToRedux: PropTypes.func,
  token: PropTypes.string,
  loading: PropTypes.bool,
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
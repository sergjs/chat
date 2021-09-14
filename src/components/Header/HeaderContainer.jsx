import React from 'react';
import Header from './Header';
import { logOut } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    )
  }
}
const mapStateToPropse = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default connect(mapStateToPropse, { logOut })(HeaderContainer);
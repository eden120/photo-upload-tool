import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Redirect} from 'react-router-dom';
import {makeSelectAuth} from "../../../modules/auth";

class HomePage extends Component {
  render() {
    const {auth: {isLogin, user}} = this.props;
    if (!isLogin) {
      return <Redirect to="/login"/>
    }
    return (
      <div>
        <div style={{textAlign: 'center', padding: '200px'}}>
          {user.type === "creator" ? "Oh hey wait for us to approve, once approved we will email you." : "Oh hey, use our mobile app to browse"}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {};

const mapStateToProps = (state) => {
  const auth = makeSelectAuth(state);
  return {
    auth
  };
};
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

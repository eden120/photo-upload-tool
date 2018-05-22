import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Redirect} from 'react-router-dom';
import {makeSelectAuth} from "../../../modules/auth";

class UploadPage extends Component {
  render() {
    const {auth: {user}} = this.props;
    return (
      <div>
        <div style={{textAlign: 'center', padding: '200px'}}>
          Upload Page
        </div>
      </div>
    );
  }
}

UploadPage.propTypes = {};

const mapStateToProps = (state) => {
  const auth = makeSelectAuth(state);
  return {
    auth
  };
};
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(UploadPage);

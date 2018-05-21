import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: 'center', padding: '200px' }}>Welcome to photo upload tool.</div>
      </div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;

import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>Welcome to photo upload too</div>
        <Link to="/signup/user">SignUp</Link>
        <Link to="/signup/creator">SignUp Creator</Link>
      </div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;

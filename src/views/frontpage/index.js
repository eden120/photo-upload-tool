import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {connect} from 'react-redux';
import {Layout, Menu} from 'antd';

import {LoadableHome} from './home';
import {LoadableRegister} from './register';
import {LoadableLogin} from './login';
import PrivateRoute from './PrivateRoute';
import {makeSelectAuth, logout} from "../../modules/auth";

const {Header, Content} = Layout;

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.onMenuClick = this.onMenuClick.bind(this);
  }
  onMenuClick({ item, key }) {
    if (key === "1") {
      this.props.dispatch(logout());
    }
  }
  render() {
    const {auth} = this.props;
    const {isLogin} = auth;
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo"/>
            {isLogin ? (<Menu
              theme="dark"
              mode="horizontal"
              style={{lineHeight: '64px'}}
              onClick={this.onMenuClick}
            >
              <Menu.Item key="1">
                Logout
              </Menu.Item></Menu>) : (<Menu
              theme="dark"
              mode="horizontal"
              style={{lineHeight: '64px'}}
            >
              <Menu.Item key="1">
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/sign/creator">Become Creator</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/sign/user">SignUp</Link>
              </Menu.Item>
            </Menu>)}
          </Header>
          <Content style={{padding: '0 50px'}}>
            <PrivateRoute exact path="/" component={LoadableHome}/>
            <Route exact path="/sign/:type" component={LoadableRegister}/>
            <Route exact path="/login" component={LoadableLogin}/>
          </Content>
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const auth = makeSelectAuth(state);
  return {
    auth
  };
};
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(App);

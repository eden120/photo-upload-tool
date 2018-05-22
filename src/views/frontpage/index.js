import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import { Layout, Menu } from 'antd';

import {LoadableHome} from './home';
import {LoadableRegister} from './register';
import {LoadableLogin} from './login';
import PrivateRoute from './PrivateRoute';

const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
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
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <PrivateRoute exact path="/" component={LoadableHome}/>
            <Route exact path="/sign/:type" component={LoadableRegister}/>
            <Route exact path="/login" component={LoadableLogin}/>
          </Content>
        </Layout>
      </Router>
    );
  }
}

export default App;

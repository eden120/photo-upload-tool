import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { Spin } from 'antd';
import { currentUser, getDocument } from './firebase';
import AppLayout from './views/frontpage';
import configureStore from './store';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      isLogin: false,
      user: {},
    };
    this.loadAssetsAsync = this.loadAssetsAsync.bind(this);
  }

  componentWillMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    try {
      const user = await currentUser();
      const userInfo = await getDocument(`users/${user.uid}`);
      this.setState({
        isLogin: true,
        user: {...user, ...userInfo},
      });
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({ isReady: true });
    }
  }

  render() {
    const { isLogin, user, isReady } = this.state;
    if (!isReady) {
      return (
        <div className="page-loading">
          <Spin size="large" />
        </div>
      );
    }
    const store = configureStore({
      auth: {
        isLogin,
        user,
        loading: false,
      },
    });
    return (
      <Provider store={store}>
        <AppLayout />
      </Provider>
    );
  }
}

export default App;
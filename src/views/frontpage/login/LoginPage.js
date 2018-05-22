import React from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import {makeSelectAuth, login} from '../../../modules/auth';

const FormItem = Form.Item;

class LoginPage extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.dispatch(login(values));
      }
    });
  };

  render() {
    const {form, auth} = this.props;
    const {getFieldDecorator} = form;
    const { loading, isLogin } = auth;

    if (isLogin) {
      return <Redirect to="/" />
    }

    return (
      <div style={{width: '300px', margin: 'auto', paddingTop: '50px'}}>
        <h2>Login</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('email', {
              rules: [
                {type: 'email', message: 'The input is not valid E-mail!'},
                {required: true, message: 'Please input your email!'}
              ],
            })(
              <Input prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Email"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input your Password!'}],
            })(
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                     placeholder="Password"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
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

const withReducer = connect(mapStateToProps, mapDispatchToProps);

const withForm = Form.create();

export default compose(
  withReducer,
  withForm
)(LoginPage);
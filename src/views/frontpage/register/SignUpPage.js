import React from 'react';
import {Form, Icon, Input, Button} from 'antd';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {makeSelectAuth, register} from '../../../modules/auth';

const FormItem = Form.Item;

class SignUpPage extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {match: {params}} = this.props;
        this.props.dispatch(register({...values, ...params}));
      }
    });
  };

  render() {
    const {form, auth, match: {params}} = this.props;
    const {getFieldDecorator} = form;
    const {loading, isLogin} = auth;
    const page = params.type ? params.type : 'user';

    if (isLogin) {
      return <Redirect to="/"/>
    }

    return (
      <div style={{width: '300px', margin: 'auto', paddingTop: '50px'}}>
        <h2>Become to {page}</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('name', {
              rules: [
                {required: true, message: 'Please input your name!'}
              ],
            })(
              <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Name"/>
            )}
          </FormItem>
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
            <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
              Register
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
)(SignUpPage);
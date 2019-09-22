import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Form, Icon, Input } from 'antd';
/* import { GlobalFooter } from 'ant-design-pro'; */
import User from 'utils/user';
import Logo from 'assets/logo.svg';

import s from './login.scss';

const { Item } = Form;


class Login extends PureComponent {

  handleOk = () => {
    const { form } = this.props
    const { validateFieldsAndScroll } = form;
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      // тут проверяем юзера и редиректим на админку
      if (values.password === 'guest') {
        console.log('user log in');
        User.setUser({ name: values.username, role: 'admin' });
        this.props.history.push('/');
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { form } = this.props;
    return (
      <Fragment>
        <div className={s.form}>
          <div className={s.logo}>
            <Logo width="40" height="33"/>
            <span>Hack Admin</span>
          </div>
          <form>
            <Item
              hasFeedback
            > {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input your login',
                },
              ],
            })(<Input
                  id="login" 
                  onPressEnter={this.handleOk}
                  placeholder="Username" />)}
            </Item>
            <Item
              hasFeedback
            > {getFieldDecorator('password', {
              rules: [
                {
                  enum: 'guest',
                  message: 'Your password incorrect',
                },
                {
                  required: true,
                  message: 'Please input your password'
                }
              ],
            })(<Input
                  id="password"
                  onPressEnter={this.handleOk}
                  placeholder="Password" />)}
            </Item>
            <Row>
              <Button
                type="primary"
                onClick={this.handleOk}
              >
              Sign in
              </Button>
              <p>
                <span>
                  Username
                  ：guest
                </span>
                <span>
                  Password
                  ：guest
                </span>
              </p>
            </Row>
          </form>
        </div>
        <div className={s.footer}>
        </div>
      </Fragment>
    )
  }
}

Login.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default Form.create({ name: 'Login' })(Login);

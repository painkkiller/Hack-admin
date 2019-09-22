import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Layout, Breadcrumb, Menu, Mention } from 'antd';

import Home from 'pages/home';
import Admin from 'pages/admin';
import Page1 from 'pages/page1';
import Page2 from 'pages/page2';
import Login from 'pages/login';
import NotFound from 'pages/not-found';

import s from './App.scss';

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout className={s.layout}>
          {/*<Header>
             <Menu className={s.menu} theme="dark" mode="horizontal">
              <Menu.Item selected>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/constructor">Constructor</Link>
              </Menu.Item>
            </Menu> 
          </Header>*/}
          <Content className={s.content}>
            <div className={s.contentInner}>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route path="/admin" component={Admin} />
                <Route exact path="/page1" component={Page1} />
                <Route exact path="/page2" component={Page2} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Content>
          <Footer className={s.footer}>Hack Admin 2019</Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default hot(App);

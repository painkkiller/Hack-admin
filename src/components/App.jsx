import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Layout, Breadcrumb, Menu, Mention } from 'antd';

import Admin from 'pages/admin';
import Login from 'pages/login';
import NotFound from 'pages/not-found';

import s from './App.scss';

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <div>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route path="/admin" component={Admin} />
                <Route component={NotFound} />
              </Switch>
            </div>
          <Footer className={s.footer}>Hack Admin 2019</Footer>
      </BrowserRouter>
    );
  }
}

export default hot(App);

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Layout, Breadcrumb, Menu, Mention, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { Route, withRouter, Switch, Link } from 'react-router-dom';

import delay from 'utils/delay';

import HomePage from 'pages/home';
import Page1 from 'pages/page1';
import Page2 from 'pages/page2';

import s from './Admin.scss';
import Loader from 'components/ui/Loader';

import Logo from 'assets/logo.svg';

class Admin extends Component {

  state = {
    isLoading: true,
    collapsed: false,
    data: []
  };

  componentDidMount() {
    delay(1000).then(() => {
      this.setState({
        isLoading: false,
        data: []
      });
    });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { match } = this.props;
    return (
      <>
        {this.state.isLoading ? (
          <Loader size="large"/>
        ) : (
          <>
          <Layout>
            <Sider className={s.sider} width={256} trigger={null} theme="light" collapsible collapsed={this.state.collapsed}>
              <div className={s.brand}>
                <div className={s.logo}>
                  <Logo width={36} height={30} style={{ marginRight: '8px'}}/>
                  {this.state.collapsed ? null : <h1>HACK ADMIN</h1>}
                </div>
              </div>
              <Menu mode="inline" defaultSelectedKeys={['/']}>
                <Menu.Item key="/">
                  <Link to="/admin">
                    <Icon type="user" />
                    <span>Home</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/page1">
                  <Link to="/admin/page1">
                    <Icon type="video-camera" />
                    <span>Page 1</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/page2">
                  <Link to="/admin/page2">
                    <Icon type="upload" />
                    <span>Page 2</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0, height: '72px' }}>
                <div className={s.toggler}>
                  <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                  />
                </div>
              </Header>
              <Content>
                <Route exact path={`${match.path}`} component={HomePage} />
                <Route exact path={`${match.path}/page1`} component={Page1} />
                <Route exact path={`${match.path}/page2`} component={Page2} />
              </Content>
            </Layout>
          </Layout>
        </>
        )}
      </>
    );
  }
}

export default withRouter(Admin);

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Layout, Breadcrumb, Menu, Mention } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { BrowserRouter, Route, withRouter, Switch, Link } from 'react-router-dom';

import delay from 'utils/delay';

import Page1 from 'pages/page1';
import Page2 from 'pages/page2';

import s from './Admin.scss';
import Loader from 'components/ui/Loader';

class Admin extends Component {

  state = {
    isLoading: true,
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




  render() {
    const { match } = this.props;
    return (
      <>
        {this.state.isLoading ? (
          <Loader size="large"/>
        ) : (
          <>
            <Layout className={s.layout}>
              <Header>
                Header
              </Header>
              <Content className={s.content}>
                <Route exact path={`${match.path}/page1`} component={Page1} />
                <Route exact path={`${match.path}/page2`} component={Page2} />
              </Content>
              <Footer className={s.footer}>Hack Admin 2019</Footer>
          </Layout>
        </>
        )}
      </>
    );
  }
}

export default withRouter(Admin);

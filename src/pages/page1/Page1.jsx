import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import delay from 'utils/delay';

import Loader from 'components/ui/Loader';

import s from './Page1.scss';

export default class HomePage extends Component {
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
    return (
      <>
        {this.state.isLoading ? (
          <Loader size="large"/>
        ) : (
          <div className={s.container}>
            <h1>Page1</h1>
            <div></div>
          </div>
        )}
      </>
    );
  }
}

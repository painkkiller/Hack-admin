import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './UserSnippet.scss';
import UserPic from 'components/UserPic';

export default class UserSnippet extends Component {
  static propTypes = {
    image: PropTypes.string,
    userName: PropTypes.string,
    additional: PropTypes.string
  };

  static defaultProps = {
    image: '',
    userName: '',
    additional: ''
  };

  render() {
    const { image, userName, additional, onClick } = this.props;
    return (
      <div className={s.wrapper} onClick={onClick}>
        <UserPic image={image} />
        <div className={s.info}>
          <div className={s.userName}>{userName}</div>
          <div className={s.additional}>{additional}</div>
        </div>
      </div>
    );
  }
}

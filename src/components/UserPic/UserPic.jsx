import React, { Component } from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './UserPic.scss';
// import DefaultPic from 'assets/profile.svg';

export default class UserPic extends Component {

  static propTypes = {
    image: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'extra-medium', 'big']),
    border: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
  };

  static defaultProps = {
    image: '',
    size: 'small',
    border: true
  };

  getStyles = () => {
    const { border } = this.props;

    if (typeof border === 'boolean' && border) {
      return { borderColor: 'white' };
    }

    if (border) {
      return { borderColor: border };
    }

    return null;
  };

  render() {
    const { image, size } = this.props;
    const bordered = !!this.getStyles();

    return (
      <div className={classNames(s.wrapper, s[size], { [s.bordered]: bordered })} style={this.getStyles()}>
        { image ? <img src={image} alt="user pic" /> : <Avatar className={s.svg} style={{ color: '#fffff', backgroundColor: '#2A5BE6', width: '30px', height: '30px' }} width={30} height={30} icon="user"/> }
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Spin } from 'antd';

import s from './Loader.scss';

export default function Loader(props) {
  return <Spin className={s.wrapper} {...props} />;
}

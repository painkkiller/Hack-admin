import React from 'react';
import s from './Layout.scss';

export default ({ children }) => (
  <div className={s.wrapper}>
    <header className={s.header} />
    <div className={s.content}>{children}</div>
    <footer className={s.footer} />
  </div>
);

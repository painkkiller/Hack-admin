import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SimpleFormField, { propTypes, defaultProps } from './SimpleFormField';
import s from './FormField.scss';

export default class FormField extends Component {
  static propTypes = {
    ...propTypes,
    leftColWidth: PropTypes.string
  };

  static defaultProps = {
    ...defaultProps,
    leftColWidth: ''
  };

  render() {
    const { name, label, mask, inputWidth, vertical, leftCol, leftColWidth, labelStyle } = this.props;
    return (
      <div className={classnames(s.wrapper, vertical && s.vertical)}>
        {!!leftCol && (
          <div
            className={classnames(s.leftCol)}
            style={{
              width: leftColWidth,
              flexBasis: leftColWidth
            }}
          >
            <label htmlFor={name} style={labelStyle} className={classnames([s.label, vertical && s.vertical])}>
              {label}
            </label>
          </div>
        )}
        <div className={s.rightCol}>
          <SimpleFormField {...this.props} style={{ width: inputWidth }} id={name} parse={mask} />
        </div>
      </div>
    );
  }
}

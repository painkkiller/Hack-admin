import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field, FormSpy } from 'react-final-form';

import formatString from 'format-string-by-pattern';
import { isRequired, composeValidators } from 'Utils/validators';
import Input from '../ui/Input';

// import InputNew from '../formitems/Input';

export const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  validate: PropTypes.oneOfType([PropTypes.instanceOf(RegExp), PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
  mask: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // eslint-disable-next-line
  format: PropTypes.any,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  // eslint-disable-next-line
  options: PropTypes.any,
  inputWidth: PropTypes.string,
  text: PropTypes.string,
  hideLeftCol: PropTypes.bool,
  vertical: PropTypes.bool,
  type: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  // eslint-disable-next-line
  rightCol: PropTypes.any,
  leftCol: PropTypes.number,
  hint: PropTypes.string,
  alarm: PropTypes.bool
};

export const defaultProps = {
  component: Input,
  required: false,
  disabled: false,
  label: '',
  text: '',
  placeholder: '',
  validate: undefined,
  inputWidth: '100%',
  options: undefined,
  hideLeftCol: false,
  vertical: false,
  mask: _ => _,
  type: '',
  min: 0,
  max: Infinity,
  format: _ => _,
  rightCol: 8,
  leftCol: 4,
  hint: '',
  alarm: true
};

export default class SimpleFormField extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  inputComponentAdapter = (() => {
    const InputComponent = this.props.component;
    return ({ input, meta, ...props }) => {
      let isValid = true;
      if (this.props.alarm && meta.submitFailed && !meta.active) {
        isValid = meta.valid;
      }
      return (
        <FormSpy subscription={{ submitting: true }}>
          {({ submitting }) => (
            <InputComponent {...input} {...props} disabled={props.disabled || submitting} meta={meta} isValid={isValid} />
          )}
        </FormSpy>
      );
    };
  })();

  getValidators = (validate, required) => {
    let r;
    if (validate) {
      if (Array.isArray(validate)) {
        r = composeValidators([...validate], required);
      } else {
        r = composeValidators([validate], required);
      }
    } else if (required) {
      r = isRequired;
    }
    return r;
  };

  render() {
    const { name, validate, mask, required, inputWidth, hint } = this.props;

    return (
      <Fragment>
        <Field
          {...this.props}
          style={{ width: inputWidth }}
          id={name}
          component={this.inputComponentAdapter}
          parse={typeof mask === 'function' ? mask : formatString(mask)}
          validate={this.getValidators(validate, required)}
        />
        {hint && (
          <div
            style={{
              position: 'absolute',
              paddingTop: '8px',
              fontSize: '14px',
              color: '#9d9d9d'
            }}
          >
            {hint}
          </div>
        )}
      </Fragment>
    );
  }
}

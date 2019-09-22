import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import createFocusDecorator from './scrollToErrorDecorator';
import FieldsChangeSpy from './FieldsChangeSpy';

const focusOnError = createFocusDecorator();

export default class FormWrapper extends Component {
  /* eslint-disable */
  static propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.any,
    validate: PropTypes.func,
    initialValues: PropTypes.object,
    debug: PropTypes.bool,
    mutators: PropTypes.object,
    decorators: PropTypes.any,
    resetAfterSubmit: PropTypes.bool,
    combine: PropTypes.bool,
    autosave: PropTypes.bool,
    pending: PropTypes.bool,
    scrollToError: PropTypes.bool,
    promise: PropTypes.bool
  };
  /* eslint-enable */

  static defaultProps = {
    onSubmit: _ => _,
    initialValues: {},
    validate: () => ({}),
    onChange: undefined,
    debug: false,
    decorators: [],
    mutators: {},
    resetAfterSubmit: true,
    combine: true,
    autosave: false,
    pending: false,
    scrollToError: false,
    promise: false
  };

  form = null;

  handleFormSubmitPromise = async (values, form) => {
    const { onSubmit, resetAfterSubmit } = this.props;
    await onSubmit(values);
    if (resetAfterSubmit) {
      form.reset();
    }
  };

  handleFormSubmit = (values, form) => {
    const { onSubmit, resetAfterSubmit } = this.props;
    if (resetAfterSubmit) {
      setTimeout(form.reset, 100);
    }
    onSubmit(values);
  };

  render() {
    const { onChange, initialValues, validate, children, debug, mutators, decorators, combine, scrollToError, promise } = this.props;

    return (
      <Form
        onSubmit={promise ? this.handleFormSubmitPromise : this.handleFormSubmit}
        validate={validate}
        mutators={{ ...mutators }}
        decorators={scrollToError ? [...decorators, focusOnError] : decorators}
        initialValues={initialValues}
      >
        {({ handleSubmit, form, values }) => (
          <form
            ref={c => {
              this.form = c;
            }}
            onSubmit={handleSubmit}
            style={{ display: 'block' }}
          >
            {onChange && <FieldsChangeSpy combine={combine} onChange={state => onChange(state)} />}
            {children}
            {debug && <pre>{JSON.stringify(values, 0, 2)}</pre>}
          </form>
        )}
      </Form>
    );
  }
}

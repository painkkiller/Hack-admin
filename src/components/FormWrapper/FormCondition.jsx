import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

const FormCondition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

FormCondition.propTypes = {
  when: PropTypes.string.isRequired,
  /* eslint-disable */
  is: PropTypes.any.isRequired
  /* eslint-enable */
};

export default FormCondition;

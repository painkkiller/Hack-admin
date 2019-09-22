import React from 'react';
import PropTypes from 'prop-types';
import { FormSpy } from 'react-final-form';

const FieldsChangeSpy = ({ onChange, combine }) => (
  <FormSpy
    onChange={state => {
      if (!state.pristine || state.valid || (combine && state.pristine && !state.valid)) {
        onChange(state);
      }
    }}
  />
);

FieldsChangeSpy.propTypes = {
  onChange: PropTypes.func.isRequired,
  combine: PropTypes.bool
};

FieldsChangeSpy.defaultProps = { combine: true };

export default FieldsChangeSpy;

/* eslint-disable */
import { getIn } from 'final-form';

//
/**
 * Predicate to identify inputs that can have focus() called on them
 */
const isFocusableInput = function isFocusableInput(wtf) {
  return !!(wtf && typeof wtf.focus === 'function');
};

//

/**
 * Gets all the inputs inside all forms on the page
 */
const getAllInputs = function getAllInputs() {
  if (typeof document === 'undefined') {
    return [];
  }
  return Array.prototype.slice
    .call(document.forms)
    .reduce((accumulator, form) => accumulator.concat(Array.prototype.slice.call(form).filter(isFocusableInput)), []);
};

//

/**
 * Finds the input by looking if the name attribute path is existing in the errors object
 */
const findInput = function findInput(inputs, errors) {
  return inputs.find(input => input.name && getIn(errors, input.name));
};

//

const createDecorator = function createDecorator(getInputs, findInput$$1) {
  return function(form) {
    const focusOnFirstError = function focusOnFirstError(errors) {
      if (!getInputs) {
        getInputs = getAllInputs;
      }
      if (!findInput$$1) {
        findInput$$1 = findInput;
      }
      const firstInput = findInput$$1(getInputs(), errors);
      if (firstInput) {
        const y = firstInput.parentElement.getBoundingClientRect().top + window.pageYOffset - 150;
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    };
    // Save original submit function
    const originalSubmit = form.submit;

    // Subscribe to errors, and keep a local copy of them
    let state = {};
    const unsubscribe = form.subscribe(
      nextState => {
        state = nextState;
      },
      {
        errors: true,
        submitErrors: true
      }
    );

    // What to do after submit
    const afterSubmit = function afterSubmit() {
      let _state = state;
      let errors = _state.errors;
      let submitErrors = _state.submitErrors;

      if (errors && Object.keys(errors).length) {
        focusOnFirstError(errors);
      } else if (submitErrors && Object.keys(submitErrors).length) {
        focusOnFirstError(submitErrors);
      }
    };

    // Rewrite submit function
    form.submit = function() {
      const result = originalSubmit.call(form);
      if (result && typeof result.then === 'function') {
        // async
        result.then(afterSubmit);
      } else {
        // sync
        afterSubmit();
      }
      return result;
    };

    return function() {
      unsubscribe();
      form.submit = originalSubmit;
    };
  };
};

//

/**
 * Generates a function to get all the inputs in a form with the specified name
 */
const getFormInputs = function getFormInputs(name) {
  return function() {
    if (typeof document === 'undefined') {
      return [];
    }
    // $FlowFixMe
    let form = document.forms[name];
    return form && form.length ? Array.prototype.slice.call(form).filter(isFocusableInput) : []; // cast cheat to get from HTMLFormElement children to FocusableInput
  };
};

//

export default createDecorator;
export { getFormInputs };

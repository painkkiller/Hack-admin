export default (validators, required) => value => {
  if (!required && !value) {
    return undefined;
  }
  return validators.reduce((error, validator) => error || validator(value), undefined);
};

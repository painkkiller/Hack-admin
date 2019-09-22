export default min => value => (value && value.length >= min ? undefined : `Should be greater than ${min}`);

export default min => value => (Number.isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`);

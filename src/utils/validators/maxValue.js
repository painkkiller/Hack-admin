export default max => value => (Number.isNaN(value) || value <= max ? undefined : `Should be greater than ${max}`);

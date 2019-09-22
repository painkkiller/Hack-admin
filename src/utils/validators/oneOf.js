export default values => value => (value && values.indexOf(value) > -1 ? undefined : true);

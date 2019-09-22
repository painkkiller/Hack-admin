export default max => value => (value && value.length <= max ? undefined : `Максимум ${max} символов`);

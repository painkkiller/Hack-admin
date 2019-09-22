export default count => value => (value && value.length === count ? undefined : 'error');

export default v => (new RegExp(/.+@.+\..+/i).test(v) ? undefined : 'wrong email');

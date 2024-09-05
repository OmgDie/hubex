export const validateEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateFormValues = values => {
  const errors = {};

  if (!values.email || !validateEmail(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.name) {
    errors.name = 'Please specify your first name';
  }
  if (!values.country) {
    errors.country = 'Please specify your country name';
  }
  if (!values.city) {
    errors.city = 'Please specify your city name';
  }
  if (!values.address) {
    errors.address = 'Please specify your address';
  }

  return errors;
};

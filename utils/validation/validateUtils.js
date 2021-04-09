import Validator from 'validator';
import isEmpty from './is-empty';

export const validateSignUpInput = (data) => {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : '';

  if(!Validator.isLength(data.name, { min: 2 })) {
    errors.name = "Name must be at least 2 characters long";
  }

  if(Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if(Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if(!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if(!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = 'Passwords must match';
  }

  if(Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = 'Confirm Passsword field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export const validateSignInInput = (data) => {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if(Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export const validateCodeInput = (code) => {
  let errors = {};

  code = !isEmpty(code) ? code : '';

  if (Validator.isEmpty(code)) {
    errors.code = 'Code field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
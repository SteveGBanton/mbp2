/* eslint-disable no-useless-escape */

import camelCase from 'lodash.camelcase';

export default function fzValidator(input, rules, messages) {
  function valString(field) {
    return (typeof field === 'string');
  }

  function valNumber(field) {
    return (typeof Number(field) === 'number' && !(Number.isNaN(Number(field))));
  }

  function valBool(field) {
    return (typeof field === 'boolean');
  }

  function valMaxLength(string, length) {
    return string.length <= Number(length);
  }

  function valMinLength(string, length) {
    return string.length >= Number(length);
  }

  function valMinValue(number, min) {
    return Number(number) >= Number(min);
  }

  function valMaxValue(number, max) {
    return Number(number) <= Number(max);
  }

  function valURL(url) {
    if (url !== '') {
      const re = /^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
      return re.test(url);
    }
    return true;
  }

  function valEmail(email) {
    if (email !== '') {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    return true;
  }

  function valPassword(pass) {
    if (pass !== '') {
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{9,}$/;
      return re.test(pass);
    }
    return true;
  }

  function valCamelCase(camelString) {
    if (camelString !== '' &&
      valString(camelString) &&
      camelCase(camelString) !== camelString) {
      return false;
    }
    return true;
  }

  function getField(path, obj = input) {
    const paths = Array.isArray(path) ? path : path.split('.');

    if (paths.length > 1 && obj[paths[0]]) {
      return getField(paths.slice(1), obj[paths[0]]);
    }

    if (paths.length === 1) {
      return obj[paths[0]];
    }
    return undefined;
  }

  // function getField(inputField) {
  //   const correctField = inputField.split('.');
  //   // Only works to verify up to 2 levels deep
  //   if (correctField.length === 2) {
  //     return input[correctField[0]][correctField[1]];
  //   }
  //   if (correctField.length === 3) {
  //     return input[correctField[0]][correctField[1]][correctField[2]];
  //   }
  //   return input[correctField[0]];
  // }

  const formErrors = {};

  Object.keys(rules).forEach((field) => {
    Object.keys(rules[field]).forEach((subrule) => {
      switch (subrule) {
        case 'required':
          if (!getField(field)) {
            formErrors[field] = messages[field].required;
          }
          break;
        case 'minLength':
          if (getField(field)) {
            if (!valMinLength(getField(field), rules[field][subrule])) {
              formErrors[field] = messages[field].minLength;
            }
          }
          break;
        case 'maxLength':
          if (getField(field)) {
            if (!valMaxLength(getField(field), rules[field][subrule])) {
              formErrors[field] = messages[field].maxlength;
            }
          }
          break;
        case 'minValue':
          if (getField(field)) {
            if (!valMinValue(getField(field), rules[field][subrule])) {
              formErrors[field] = messages[field].minValue;
            }
          }
          break;
        case 'maxValue':
          if (getField(field)) {
            if (!valMaxValue(getField(field), rules[field][subrule])) {
              formErrors[field] = messages[field].maxValue;
            }
          }
          break;
        case 'camelCase':
          if (getField(field)) {
            if (!valCamelCase(getField(field), rules[field][subrule])) {
              formErrors[field] = messages[field].camelCase;
            }
          }
          break;
        case 'email':
          if (getField(field)) {
            if (!valEmail(getField(field))) {
              formErrors[field] = messages[field].email;
            }
          }
          break;
        case 'password':
          if (getField(field)) {
            if (!valPassword(getField(field))) {
              formErrors[field] = messages[field].password;
            }
          }
          break;
        case 'string':
          if (getField(field)) {
            if (!valString(getField(field))) {
              formErrors[field] = messages[field].string;
            }
          }
          break;
        case 'url':
          if (getField(field)) {
            if (!valURL(getField(field))) {
              formErrors[field] = messages[field].url;
            }
          }
          break;
        case 'bool':
          if (getField(field)) {
            if (!valBool(getField(field))) {
              formErrors[field] = messages[field].bool;
            }
          }
          break;
        case 'number':
          if (getField(field)) {
            if (!valNumber(getField(field))) {
              formErrors[field] = messages[field].number;
            }
          }
          break;
        default:
          break;
      }
    });
  });

  // return false if no errors returned, return formError object if errors present
  if (Object.keys(formErrors).length === 0 &&
    formErrors.constructor === Object
  ) {
    return false;
  }

  return formErrors;
}

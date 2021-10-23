// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

export default function useValidators() {
  const isEmpty = (fieldValue) => {
      return !fieldValue.trim();
  }

  const minLength = (fieldName, fieldValue, min) => {
      return fieldValue.length < min ? `The ${fieldName} field must be atleast ${min} characters long` : "";
  }

  const isEmail = (fieldName, fieldValue) => {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !re.test(fieldValue) ? "The input is not a valid " + fieldName + " address" : "";
  }
  return { isEmpty, minLength, isEmail }
}

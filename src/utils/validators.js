export function validateEmail(input) {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

export function validateName(input) {
  let regName = /^[a-zA-Z]+$/;
  if (!regName.test(input)) {
    return false;
  } else {
    return true;
  }
}

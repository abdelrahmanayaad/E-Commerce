const ruleValidatorMapper = {
  isPhone: validatePhone,
  isConfirmationCode: validateConfirmationCode,
};

function validatePhone(phone) {
  if (phone.length !== 11) {
    return false;
  }
  return /^[0-9]+$/.test(phone);
}

function validateConfirmationCode(userInput) {
  if (userInput.length !== 4) return false;
  return /^[0-9]+$/.test(userInput);
}

export function validate(userInput, rules) {
  let isValid = true;
  for (let rule of rules) {
    isValid = isValid && ruleValidatorMapper[rule.key](userInput);
  }
  return isValid;
}

function allowOnlyLetters(value: string): string {
  const sanitizedValue = value.replace(/[^A-Za-z\s]/g, '');
  return sanitizedValue;
}

function allowOnlyNumbers(value: string): string {
  const sanitizedValue = value.replace(/[^0-9]/g, '');
  return sanitizedValue;
}

function validateEmailFormat(value: string): boolean {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const isValid = emailPattern.test(value);
  return isValid;
}

export default {
  allowOnlyLetters,
  allowOnlyNumbers,
  validateEmailFormat,
};

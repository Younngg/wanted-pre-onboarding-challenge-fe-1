export const validateEmail = (email: string) => {
  return email.includes('@') && email.includes('.');
};

export const validatePassword = (password: string) => {
  return password.length >= 8;
};

export const validateEmailAndPassword = (email: string, password: string) => {
  return validateEmail(email) && validatePassword(password);
};

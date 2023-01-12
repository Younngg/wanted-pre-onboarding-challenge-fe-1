export const validateEmail = (email: string) => {
  return email.includes('@') && email.includes('.');
};

export const validatePassword = (password: string) => {
  return password.length >= 8;
};

export const validateEmailAndPassword = (isValid: {
  email: boolean;
  password: boolean;
}) => {
  return Object.values(isValid).every((ele) => ele);
};

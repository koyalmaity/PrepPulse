const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MIN_PASSWORD_LENGTH = 8;

export function isValidEmail(value) {
  return EMAIL_PATTERN.test(value.trim());
}

// Each validator returns an object like { email: 'message' }.
// An empty object means the form is valid.

export function validateLogin({ email, password }) {
  const errors = {};
  if (!email.trim()) errors.email = 'Enter your email address.';
  else if (!isValidEmail(email)) errors.email = 'Enter a valid email address, like name@college.edu.';
  if (!password) errors.password = 'Enter your password.';
  return errors;
}

export function validateRegistration(values) {
  const errors = {};

  if (!values.fullName.trim()) errors.fullName = 'Enter your full name.';

  if (!values.email.trim()) errors.email = 'Enter your email address.';
  else if (!isValidEmail(values.email)) errors.email = 'Enter a valid email address, like name@college.edu.';

  if (!values.password) errors.password = 'Create a password.';
  else if (values.password.length < MIN_PASSWORD_LENGTH)
    errors.password = `Use at least ${MIN_PASSWORD_LENGTH} characters.`;

  if (!values.confirmPassword) errors.confirmPassword = 'Re-enter your password.';
  else if (values.confirmPassword !== values.password)
    errors.confirmPassword = 'Passwords do not match.';

  if (!values.college.trim()) errors.college = 'Enter your college or university.';
  if (!values.rollNumber.trim()) errors.rollNumber = 'Enter your student ID or roll number.';
  if (!values.branch) errors.branch = 'Select your branch.';
  if (!values.academicYear) errors.academicYear = 'Select your academic year.';

  return errors;
}

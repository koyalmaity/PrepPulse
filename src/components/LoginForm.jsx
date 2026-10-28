import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from './FormField.jsx';
import PasswordField from './PasswordField.jsx';
import Button from './Button.jsx';
import { validateLogin } from '../utils/validators.js';
import { login } from '../services/authService.js';

// Shared by the Student, Company and T&P login pages.
export default function LoginForm({ role, emailLabel = 'Email', redirectTo, note, footer }) {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    // Clear the message for a field as soon as the person edits it.
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const foundErrors = validateLogin(values);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    setSubmitting(true);
    await login(role, values); // prototype: always succeeds
    navigate(redirectTo);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <FormField
          id="email"
          label={emailLabel}
          type="email"
          autoComplete="email"
          placeholder="name@college.edu"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <PasswordField
          id="password"
          label="Password"
          autoComplete="current-password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        <div className="form__row">
          {/* Placeholder: password reset arrives with the backend module */}
          <a href="#forgot" className="link" onClick={(event) => event.preventDefault()}>
            Forgot password?
          </a>
        </div>
        <Button type="submit" fullWidth disabled={submitting}>
          {submitting ? 'Logging in...' : 'Login'}
        </Button>
      </form>

      {note && <p className="auth-note">{note}</p>}
      {footer && <p className="auth-footer">{footer}</p>}
    </>
  );
}

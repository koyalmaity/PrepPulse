import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import AuthLayout from '../../components/AuthLayout.jsx';
import FormField from '../../components/FormField.jsx';
import PasswordField from '../../components/PasswordField.jsx';
import Button from '../../components/Button.jsx';
import { validateRegistration } from '../../utils/validators.js';
import { registerStudent } from '../../services/authService.js';

const BRANCHES = [
  'Computer Science & Engineering',
  'Information Technology',
  'Electronics & Communication',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Other',
];

const ACADEMIC_YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Postgraduate'];

const EMPTY_FORM = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  college: '',
  rollNumber: '',
  branch: '',
  academicYear: '',
};

export default function StudentRegister() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const foundErrors = validateRegistration(values);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    await registerStudent(values); // prototype: nothing is saved
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <AuthLayout title="Registration received" Icon={CheckCircle2}>
        <p className="auth-card__subtitle">
          Thanks, {values.fullName.trim()}. This is a prototype, so no account was created yet.
          Real registration will be available once the backend is connected.
        </p>
        <Button to="/student/login" fullWidth>Go to Login</Button>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Create your student account"
      subtitle="Tell us a little about yourself to get started."
      Icon={GraduationCap}
      wide
    >
      <form className="form form--grid" onSubmit={handleSubmit} noValidate>
        <FormField
          id="fullName" label="Full name" autoComplete="name"
          value={values.fullName} onChange={handleChange} error={errors.fullName}
        />
        <FormField
          id="email" label="Email" type="email" autoComplete="email"
          placeholder="name@college.edu"
          value={values.email} onChange={handleChange} error={errors.email}
        />
        <PasswordField
          id="password" label="Password" autoComplete="new-password"
          placeholder="At least 8 characters"
          value={values.password} onChange={handleChange} error={errors.password}
        />
        <PasswordField
          id="confirmPassword" label="Confirm password" autoComplete="new-password"
          value={values.confirmPassword} onChange={handleChange} error={errors.confirmPassword}
        />
        <FormField
          id="college" label="College / University"
          value={values.college} onChange={handleChange} error={errors.college}
        />
        <FormField
          id="rollNumber" label="Student ID / Roll number"
          value={values.rollNumber} onChange={handleChange} error={errors.rollNumber}
        />
        <FormField
          id="branch" label="Branch" as="select"
          value={values.branch} onChange={handleChange} error={errors.branch}
        >
          <option value="">Select branch</option>
          {BRANCHES.map((branch) => (
            <option key={branch} value={branch}>{branch}</option>
          ))}
        </FormField>
        <FormField
          id="academicYear" label="Academic year" as="select"
          value={values.academicYear} onChange={handleChange} error={errors.academicYear}
        >
          <option value="">Select year</option>
          {ACADEMIC_YEARS.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </FormField>

        <div className="form__full">
          <Button type="submit" fullWidth>Create Account</Button>
        </div>
      </form>

      <p className="auth-footer">
        Already have an account? <Link to="/student/login" className="link">Login</Link>
      </p>
    </AuthLayout>
  );
}

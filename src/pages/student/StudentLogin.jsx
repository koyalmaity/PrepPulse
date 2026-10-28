import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import AuthLayout from '../../components/AuthLayout.jsx';
import LoginForm from '../../components/LoginForm.jsx';

export default function StudentLogin() {
  return (
    <AuthLayout
      title="Student Login"
      subtitle="Sign in to manage your placement profile."
      Icon={GraduationCap}
    >
      <LoginForm
        role="student"
        redirectTo="/student/dashboard"
        footer={
          <>
            Don&apos;t have an account?{' '}
            <Link to="/student/register" className="link">Create Account</Link>
          </>
        }
      />
    </AuthLayout>
  );
}

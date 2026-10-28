import { Building2 } from 'lucide-react';
import AuthLayout from '../../components/AuthLayout.jsx';
import LoginForm from '../../components/LoginForm.jsx';

export default function CompanyLogin() {
  return (
    <AuthLayout
      title="Company Login"
      subtitle="Sign in to manage your recruitment requirements."
      Icon={Building2}
    >
      <LoginForm
        role="company"
        emailLabel="Company email"
        redirectTo="/company/dashboard"
        note="Company accounts are managed/authorized by the Training & Placement department."
      />
    </AuthLayout>
  );
}

import { ShieldCheck } from 'lucide-react';
import AuthLayout from '../../components/AuthLayout.jsx';
import LoginForm from '../../components/LoginForm.jsx';

export default function TPLogin() {
  return (
    <AuthLayout
      title="T&P Officer Login"
      subtitle="Sign in to manage placement activities."
      Icon={ShieldCheck}
    >
      <LoginForm
        role="tp"
        emailLabel="Official email"
        redirectTo="/tp/dashboard"
        note="T&P Officer accounts are authorized by the institution."
      />
    </AuthLayout>
  );
}

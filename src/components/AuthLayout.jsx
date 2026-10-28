import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from './Logo.jsx';
import CollegeHeader from './CollegeHeader.jsx';

// Shared shell for every login / register page.
export default function AuthLayout({ title, subtitle, Icon, wide = false, children }) {
  return (
    <div className="auth-page">
      <CollegeHeader />
      <header className="auth-page__top">
        <Logo />
        <Link to="/" className="auth-page__back">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>
      </header>

      <main className="auth-page__main">
        <section className={`auth-card${wide ? ' auth-card--wide' : ''}`} aria-labelledby="auth-title">
          {Icon && (
            <span className="auth-card__icon" aria-hidden="true">
              <Icon size={24} />
            </span>
          )}
          <h1 id="auth-title">{title}</h1>
          {subtitle && <p className="auth-card__subtitle">{subtitle}</p>}
          {children}
        </section>
      </main>
    </div>
  );
}

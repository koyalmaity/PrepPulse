import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import Logo from './Logo.jsx';
import Button from './Button.jsx';
import CollegeHeader from './CollegeHeader.jsx';
import { logout } from '../services/authService.js';

// Shared shell for the three placeholder dashboards.
export default function DashboardLayout({ title, loginPath, cards }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate(loginPath);
  };

  return (
    <div className="dash">
      <CollegeHeader />
      <header className="dash__top">
        <div className="container dash__top-inner">
          <Logo />
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut size={17} aria-hidden="true" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container dash__main">
        <p className="dash__welcome">Welcome to PrepPulse</p>
        <h1>{title}</h1>
        <p className="dash__note">
          These sections are placeholders. Their features arrive in later modules.
        </p>

        <div className="dash__grid">
          {cards.map(({ title: cardTitle, description, Icon }) => (
            <article className="dash-card" key={cardTitle}>
              <span className="dash-card__icon" aria-hidden="true">
                <Icon size={22} />
              </span>
              <h2>{cardTitle}</h2>
              <p>{description}</p>
              <span className="dash-card__badge">Coming soon</span>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from './Button.jsx';

export default function RoleCard({ role }) {
  const { title, badge, description, features, cta, to, Icon } = role;
  const headingId = `role-${role.key}`;

  return (
    <article className="role-card" aria-labelledby={headingId}>
      <div className="role-card__header">
        <span className="role-card__icon" aria-hidden="true">
          <Icon size={24} />
        </span>
        {badge && <span className="role-card__badge-pill">{badge}</span>}
      </div>

      <h3 id={headingId}>{title}</h3>
      <p className="role-card__desc">{description}</p>

      {features && (
        <ul className="role-card__features">
          {features.map((feat) => (
            <li key={feat}>
              <CheckCircle2 size={15} className="role-card__check" aria-hidden="true" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}

      <Button to={to} variant="primary" fullWidth className="role-card__btn">
        {cta}
        <ArrowRight size={17} aria-hidden="true" />
      </Button>
    </article>
  );
}

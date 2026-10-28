import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export default function Logo({ to = '/' }) {
  return (
    <Link to={to} className="logo" aria-label="PRMIT&R Training and Placement Portal">
      <span className="logo__mark" aria-hidden="true">
        <GraduationCap size={20} strokeWidth={2.4} />
      </span>
      <div className="logo__text-wrap">
        <span className="logo__text">T&amp;P Portal</span>
        <span className="logo__sub">PRMIT&amp;R Badnera</span>
      </div>
    </Link>
  );
}

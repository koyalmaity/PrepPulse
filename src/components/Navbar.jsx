import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Portals', href: '#roles' },
  { label: 'Announcements', href: '#notices' },
  { label: 'Recruiters', href: '#recruiters' },
  { label: 'Statistics', href: '#stats' },
  { label: 'About T&P', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar navbar--collegiate">
      <div className="container navbar__inner">
        <Logo />

        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          id="main-nav"
          className={`navbar__nav${open ? ' navbar__nav--open' : ''}`}
          aria-label="Main Navigation"
        >
          <ul className="navbar__links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

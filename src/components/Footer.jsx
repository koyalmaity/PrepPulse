import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo />
        <p className="footer__affiliation">
          Prof. Ram Meghe Institute of Technology and Research, Badnera - Amravati (An Autonomous Institute)
        </p>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} PRMIT&amp;R Training &amp; Placement Department. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

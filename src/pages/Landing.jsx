import {
  Mail,
  Phone,
  MapPin,
  Award,
  TrendingUp,
  Building2,
  Calendar,
  Bell,
  CheckCircle2,
  BookOpen,
  Users2,
  ExternalLink,
} from 'lucide-react';
import CollegeHeader from '../components/CollegeHeader.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import RoleCard from '../components/RoleCard.jsx';
import Button from '../components/Button.jsx';
import { ROLES } from '../data/roles.js';

const TPO_CONTACT = {
  office: 'Training & Placement Cell, Administrative Block',
  college: 'Prof. Ram Meghe Institute of Technology and Research (PRMIT&R)',
  address: 'Badnera - Amravati, Maharashtra 444701',
  email: 'tpo@mitra.ac.in',
  altEmail: 'placement@mitra.ac.in',
  phone: '+91 721 2580371 / 2580373',
};

const NOTICES = [
  {
    id: 1,
    title: 'Campus Recruitment Drives 2025-26: Onboarding and schedule published for upcoming IT & Core drives.',
    tag: 'Latest Drive',
    date: 'Oct 2026',
    isNew: true,
  },
  {
    id: 2,
    title: 'TCS National Qualifier Test (NQT): Registration & hall ticket slot confirmation active on student portal.',
    tag: 'Notice',
    date: 'Oct 2026',
    isNew: true,
  },
  {
    id: 3,
    title: 'Cognizant GenC: Technical assessment results & subsequent interview schedules announced.',
    tag: 'Shortlist',
    date: 'Oct 2026',
    isNew: false,
  },
  {
    id: 4,
    title: 'Pre-Placement Soft Skills & Technical Aptitude Training module commencing for final and pre-final year batches.',
    tag: 'Training',
    date: 'Sept 2026',
    isNew: false,
  },
];

const STATS = [
  { value: '500+', label: 'Campus Placement Offers', icon: TrendingUp },
  { value: '120+', label: 'Corporate Recruiters', icon: Building2 },
  { value: '₹12.5 LPA', label: 'Highest Package Offered', icon: Award },
  { value: '40+ Yrs', label: 'Academic & Training Legacy', icon: BookOpen },
];

const RECRUITERS = [
  'Tata Consultancy Services',
  'Cognizant',
  'Infosys',
  'Wipro Technologies',
  'Capgemini',
  'L&T Infotech',
  'Tech Mahindra',
  'Persistent Systems',
  'Hexaware Technologies',
  'HCL Technologies',
  'Bosch India',
  'Reliance Jio',
];

const TPO_PILLARS = [
  {
    icon: Users2,
    title: 'Comprehensive Pre-Placement Training',
    desc: 'Rigorous modules covering quantitative aptitude, logical reasoning, verbal communication, coding bootcamps, and mock interviews from the 2nd year onwards.',
  },
  {
    icon: Building2,
    title: 'Active Industry-Institute Partnerships',
    desc: 'Formal corporate MoUs with industry leaders, sponsored student internships, industry expert sessions, and domain-specific campus immersion programs.',
  },
  {
    icon: CheckCircle2,
    title: 'Merit-Based Automated Placement Process',
    desc: 'Centralized portal ensuring unbiased eligibility audits, instant notifications, transparent interview slotting, and official offer document records.',
  },
];

export default function Landing() {
  return (
    <>
      <CollegeHeader />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-collegiate">
          <div className="container hero-collegiate__inner">
            <div className="hero-collegiate__badge">
              <span>Training &amp; Placement Department</span>
            </div>

            <h1 className="hero-collegiate__title">
              Bridging Academic Excellence with Global Industry Opportunities
            </h1>

            <p className="hero-collegiate__lead">
              Welcome to the official Training &amp; Placement portal of Prof. Ram Meghe
              Institute of Technology and Research (PRMIT&amp;R), Badnera - Amravati.
              Facilitating recruitment drives, internships, and career training for
              engineering and management disciplines.
            </p>

            <div className="hero-collegiate__actions">
              <a href="#roles" className="hero-btn hero-btn--primary">
                Select Your Portal
              </a>
              <a href="#notices" className="hero-btn hero-btn--outline">
                Placement Notices &amp; Schedules
              </a>
            </div>
          </div>
        </section>

        {/* Live Notices & Announcements Ticker */}
        <section id="notices" className="notices-strip" aria-labelledby="notices-heading">
          <div className="container">
            <div className="notices-strip__header">
              <div className="notices-strip__title-wrap">
                <Bell size={18} className="notices-strip__bell" aria-hidden="true" />
                <h2 id="notices-heading" className="notices-strip__title">
                  T&amp;P Announcements &amp; Drive Notices
                </h2>
              </div>
              <span className="notices-strip__badge">Official Updates</span>
            </div>

            <div className="notices-strip__list">
              {NOTICES.map((item) => (
                <div key={item.id} className="notice-item">
                  <div className="notice-item__meta">
                    <span className="notice-item__tag">{item.tag}</span>
                    {item.isNew && <span className="notice-item__new">NEW</span>}
                    <span className="notice-item__date">{item.date}</span>
                  </div>
                  <p className="notice-item__text">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Placement Portals Section */}
        <section id="roles" className="section roles-section" aria-labelledby="roles-title">
          <div className="container">
            <div className="section__head">
              <span className="section__sub-badge">Authorized Access</span>
              <h2 id="roles-title">Campus Placement Portals</h2>
              <p>Dedicated access portals for students, visiting corporate recruiters, and the T&amp;P office.</p>
            </div>
            <div className="roles__grid">
              {ROLES.map((role) => (
                <RoleCard key={role.key} role={role} />
              ))}
            </div>
          </div>
        </section>

        {/* Statistics & Placement Highlights */}
        <section id="stats" className="stats-section" aria-labelledby="stats-title">
          <div className="container">
            <div className="section__head section__head--light">
              <span className="section__sub-badge section__sub-badge--light">Placement Highlights</span>
              <h2 id="stats-title">Proven Track Record in Campus Placements</h2>
              <p>Consistently placing our engineering and management graduates in top-tier multinational corporations.</p>
            </div>

            <div className="stats-grid">
              {STATS.map(({ value, label, icon: Icon }) => (
                <div className="stat-card" key={label}>
                  <span className="stat-card__icon" aria-hidden="true">
                    <Icon size={26} />
                  </span>
                  <div className="stat-card__val">{value}</div>
                  <div className="stat-card__label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prominent Recruiters */}
        <section id="recruiters" className="section recruiters-section" aria-labelledby="recruiters-title">
          <div className="container">
            <div className="section__head">
              <span className="section__sub-badge">Corporate Network</span>
              <h2 id="recruiters-title">Our Prominent Campus Recruiters</h2>
              <p>Leading enterprises and Fortune 500 companies regularly participate in our annual recruitment programs.</p>
            </div>

            <div className="recruiters-grid">
              {RECRUITERS.map((name) => (
                <div className="recruiter-badge" key={name}>
                  <Building2 size={16} className="recruiter-badge__icon" aria-hidden="true" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About T&P Cell Functions */}
        <section id="about" className="section about-section" aria-labelledby="about-title">
          <div className="container">
            <div className="section__head">
              <span className="section__sub-badge">Department Overview</span>
              <h2 id="about-title">About Training &amp; Placement Cell</h2>
              <p>Nurturing career readiness, technical proficiency, and professional excellence.</p>
            </div>

            <div className="about-pillars">
              {TPO_PILLARS.map(({ icon: Icon, title, desc }) => (
                <div className="pillar-card" key={title}>
                  <span className="pillar-card__icon" aria-hidden="true">
                    <Icon size={24} />
                  </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact TPO Department */}
        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
          <div className="container">
            <div className="contact-box">
              <div className="contact-box__info">
                <span className="section__sub-badge">Get in Touch</span>
                <h2 id="contact-title">Training &amp; Placement Department</h2>
                <p className="contact-box__college">{TPO_CONTACT.college}</p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <MapPin size={18} aria-hidden="true" className="contact-item__icon" />
                    <span>{TPO_CONTACT.office}, {TPO_CONTACT.address}</span>
                  </div>

                  <div className="contact-item">
                    <Mail size={18} aria-hidden="true" className="contact-item__icon" />
                    <a href={`mailto:${TPO_CONTACT.email}`}>{TPO_CONTACT.email}</a>
                    <span className="contact-divider">/</span>
                    <a href={`mailto:${TPO_CONTACT.altEmail}`}>{TPO_CONTACT.altEmail}</a>
                  </div>

                  <div className="contact-item">
                    <Phone size={18} aria-hidden="true" className="contact-item__icon" />
                    <span>{TPO_CONTACT.phone}</span>
                  </div>
                </div>
              </div>

              <div className="contact-box__actions">
                <Button href={`mailto:${TPO_CONTACT.email}`} variant="primary">
                  <Mail size={17} aria-hidden="true" />
                  Email TPO Office
                </Button>
                <a
                  href="https://mitra.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="college-external-btn"
                >
                  Visit Official Website (mitra.ac.in)
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

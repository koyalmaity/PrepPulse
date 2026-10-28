import { GraduationCap, Building2, ShieldCheck } from 'lucide-react';

// Single source of truth for the three placement portals.
export const ROLES = [
  {
    key: 'student',
    title: 'Student Portal',
    badge: 'B.Tech / M.Tech / MBA / MCA',
    description:
      'Access ongoing campus recruitment drives, submit verified credentials, track application eligibility, and view shortlisted results.',
    features: [
      'Campus Drive Applications',
      'Verified Academic & Skill Profile',
      'Interview Schedules & Offer Letters',
    ],
    cta: 'Student Login / Register',
    to: '/student/login',
    Icon: GraduationCap,
  },
  {
    key: 'company',
    title: 'Recruiter Portal',
    badge: 'Industry & Corporate Partners',
    description:
      'Publish job requisitions and internship opportunities, filter eligible candidate pools across disciplines, and coordinate recruitment rounds.',
    features: [
      'Campus Drive & Job Postings',
      'Branch-wise Candidate Filtering',
      'Interview Slot Coordination',
    ],
    cta: 'Recruiter Access',
    to: '/company/login',
    Icon: Building2,
  },
  {
    key: 'tp',
    title: 'T&P Administration',
    badge: 'Training & Placement Office',
    description:
      'Manage end-to-end institutional placement activities, verify student academic credentials, approve recruiter requests, and compile reports.',
    features: [
      'Drive Approvals & Management',
      'Department-wide Eligibility Audits',
      'Annual Placement Analytics',
    ],
    cta: 'TPO Officer Sign In',
    to: '/tp/login',
    Icon: ShieldCheck,
  },
];


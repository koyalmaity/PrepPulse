import { UserRound, Briefcase, ClipboardList } from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout.jsx';

const CARDS = [
  { title: 'My Profile', description: 'Keep your academic and placement details up to date.', Icon: UserRound },
  { title: 'Placement Opportunities', description: 'Browse companies and drives open to you.', Icon: Briefcase },
  { title: 'Application Status', description: 'Follow your applications from submission to result.', Icon: ClipboardList },
];

export default function StudentDashboard() {
  return <DashboardLayout title="Student Dashboard" loginPath="/student/login" cards={CARDS} />;
}

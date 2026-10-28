import { Users, Building2, CalendarCheck, BadgeCheck } from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout.jsx';

const CARDS = [
  { title: 'Students', description: 'View and manage registered student records.', Icon: Users },
  { title: 'Companies', description: 'Authorize companies and track their requirements.', Icon: Building2 },
  { title: 'Placement Drives', description: 'Schedule and monitor recruitment drives.', Icon: CalendarCheck },
  { title: 'Eligible Students', description: 'See which students qualify for each company.', Icon: BadgeCheck },
];

export default function TPDashboard() {
  return <DashboardLayout title="T&P Officer Dashboard" loginPath="/tp/login" cards={CARDS} />;
}

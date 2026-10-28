import { Building2, ListChecks, Users } from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout.jsx';

const CARDS = [
  { title: 'Company Profile', description: 'Describe your organization and hiring contacts.', Icon: Building2 },
  { title: 'Recruitment Requirements', description: 'Define the roles and criteria you are hiring for.', Icon: ListChecks },
  { title: 'Student Applications', description: 'Review students who match your requirements.', Icon: Users },
];

export default function CompanyDashboard() {
  return <DashboardLayout title="Company Dashboard" loginPath="/company/login" cards={CARDS} />;
}

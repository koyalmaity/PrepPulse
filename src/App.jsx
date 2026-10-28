import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import StudentLogin from './pages/student/StudentLogin.jsx';
import StudentRegister from './pages/student/StudentRegister.jsx';
import StudentDashboard from './pages/student/StudentDashboard.jsx';
import CompanyLogin from './pages/company/CompanyLogin.jsx';
import CompanyDashboard from './pages/company/CompanyDashboard.jsx';
import TPLogin from './pages/tp/TPLogin.jsx';
import TPDashboard from './pages/tp/TPDashboard.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/student/login" element={<StudentLogin />} />
      <Route path="/student/register" element={<StudentRegister />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />

      <Route path="/company/login" element={<CompanyLogin />} />
      <Route path="/company/dashboard" element={<CompanyDashboard />} />

      <Route path="/tp/login" element={<TPLogin />} />
      <Route path="/tp/dashboard" element={<TPDashboard />} />

      {/* Anything unknown goes back to the landing page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

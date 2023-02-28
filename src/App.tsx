import "./scss/main.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthPage from "./pages/user/auth";
import DomainsPage from "./pages/main/domain";
import RegisterPage from "./pages/user/register";
import TrackingPage from "./pages/main/tracking";
import HealthCheckPage from "./pages/admin/healthCheck";
import ProfilePage from "./pages/user/profile";
import ManagerHistory from "./pages/admin/managerHistory";
import PortalHistory from "./pages/admin/portalHistory";
import WebSettings from "./pages/admin/webSetting";
import AdminDomain from "./pages/admin/domain";
import Users from "./pages/admin/users";
import Roles from "./pages/admin/roles";
import Header from "./layout/header";
import AdminLayout from "./layout/admin";
import DomainProjectLayout from "./layout/domain";
import Dashboard from "./pages/domain/analytics/dashboard";

function App() {



  return (
    <Router>
      <Routes>
        <Route path="/auths/login" element={<AuthPage />} />
        <Route path="/auths/register" element={<RegisterPage />} />

        <Route path="/" element={<Header />}>
          <Route path="/domains" element={<DomainsPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/auths/profile" element={<ProfilePage />} />

          {/**admin drawer로 관리되는 영역 */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/common/health-check" element={<HealthCheckPage />} />
            <Route path="/admin/common/users" element={<Users />} />
            <Route path="/admin/common/roles" element={<Roles />} />
            <Route path="/admin/common/domain" element={<AdminDomain />} />
            <Route path="/admin/common/manager/history" element={<ManagerHistory />} />
            <Route path="/admin/common/portal/history" element={<PortalHistory />} />
            <Route path="/admin/web/settings" element={<WebSettings />} />
          </Route>

          {/**domain project로 관리되는 영역 /{domain project name}/ */}
          <Route path="/:projectName" element={<DomainProjectLayout />}>
            <Route path="/:projectName/analytics/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

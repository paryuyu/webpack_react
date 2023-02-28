import "./scss/main.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/layout";
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

function App() {



  return (
        <Router>
          <Routes>
            <Route path="/auths/login" element={<AuthPage />} />
            <Route path="/auths/register" element={<RegisterPage />} />

            <Route path="/" element={<Layout />}>
              <Route path="/domains" element={<DomainsPage />} />
              <Route path="/tracking" element={<TrackingPage />} />
              <Route path="/auths/profile" element={<ProfilePage />} />
              
              {/**drawer로 관리되는 영역 */}
              <Route path="/admin/common/health-check" element={<HealthCheckPage />} />
              <Route path="/admin/common/users" element={<Users />} />
              <Route path="/admin/common/roles" element={<Roles />} />
              <Route path="/admin/common/domain" element={<AdminDomain />} />
              <Route path="/admin/common/manager/history" element={<ManagerHistory />} />
              <Route path="/admin/common/portal/history" element={<PortalHistory />} />
              <Route path="/admin/web/settings" element={<WebSettings />} />

            </Route>
          </Routes>
        </Router>
  );
}

export default App;

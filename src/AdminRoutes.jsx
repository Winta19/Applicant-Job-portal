import { Route, Routes } from "react-router-dom";
import { SidebarProvider } from "./SidebarContext";
import Layout from "./components/components/Layout";
import Users from "./pages/pages/Users";
import Settings from "./pages/pages/Settings";
import Applicants from "./components/components/Applicants";
import Jobs from "./pages/pages/Jobs";
import CreateNewJobForm from "./pages/pages/CreateNewJobForm";
import Departments from "./pages/pages/Departments";
import Locations from "./pages/pages/Locations";
import EditDepartment from "./pages/pages/EditDepartment";
import CreateNewDepartment from "./pages/pages/CreateNewDepartment";
import CreateNewLocation from "./pages/pages/CreateNewLocation";
import CreateNewUsers from "./pages/pages/CreateNewUsers";
import Login from "./pages/pages/LogIn";
import Dashboard from "./pages/pages/DashBoard";

function AdminRoutes() {
  return (
    <SidebarProvider>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="applicants" element={<Applicants />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="create-new-job" element={<CreateNewJobForm />} />
          <Route path="departments" element={<Departments />} />
          <Route path="locations" element={<Locations />} />
          <Route path="edit-department/:id" element={<EditDepartment />} />
          <Route path="create-department" element={<CreateNewDepartment />} />
          <Route path="create-location" element={<CreateNewLocation />} />
          <Route path="create-user" element={<CreateNewUsers />} />
        </Routes>
      </Layout>
    </SidebarProvider>
  );
}

export default AdminRoutes;

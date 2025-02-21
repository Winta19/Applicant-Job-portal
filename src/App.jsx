import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";
import Benefits from "./pages/Benefits";
import LifeAtIe from "./pages/LifeAtIe";

import JobDetails from "./pages/JobDetails";
import ApplyForm from "./pages/ApplyForm";

import Layout from "./components/Layout";
import LayoutAdmin from "./components/LayoutAdmin";
// import AdminRoutes from "./AdminRoutes";
import Login from "./pages/pages/LogIn";
import Dashboard from "./pages/pages/DashBoard";
import Users from "./pages/pages/Users";
import Applicants from "./components/components/Applicants";
import Settings from "./pages/pages/Settings";
import Jobs from "./pages/pages/Jobs";
import CreateNewJobForm from "./pages/pages/CreateNewJobForm";
import Departments from "./pages/pages/Departments";
import Locations from "./pages/pages/Locations";
import EditDepartment from "./pages/pages/EditDepartment";
import CreateNewDepartment from "./pages/pages/CreateNewDepartment";
import CreateNewLocation from "./pages/pages/CreateNewLocation";
import CreateNewUsers from "./pages/pages/CreateNewUsers";
import EditUser from "./pages/pages/EditUser";
import EditJob from "./pages/pages/EditJob";
import JobDescription from "./pages/pages/JobDescription";

{
  /*import JobDescription from './components/JobDescription';*/
}

function App() {
  return (
    <>
      <div className="">
        {/*<JobDescription />*/}
        <Routes>
          {/* //////////////////////////////  Admin route //////////////// */}
          {/* ////////////////////////////////////////////////////////////  */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/lifeatie" element={<LifeAtIe />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/job-details/:id" element={<JobDetails />} />
            <Route path="/ApplyForm/:id" element={<ApplyForm />} />
          </Route>
          <Route path="/login" element={<Login />} />

          {/* Admin Panel (Protected by Layout) */}
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<Dashboard />} /> {/* Default: /admin */}
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
            <Route path="/admin/edit-user/:id" element={<EditUser />} />
            <Route path="/admin/edit-job/:id" element={<EditJob />} />
            <Route path="job-description/:id" element={<JobDescription />} />
          </Route>
        </Routes>
        {/* <Home /> */}
      </div>
    </>
  );
}

export default App;

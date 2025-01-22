import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";
import Benefits from "./pages/Benefits";
import LifeAtIe from "./pages/LifeAtIe";

import JobDetails from "./pages/JobDetails";
import ApplyForm from "./pages/ApplyForm";
import AdminPanel from "./pages/admin/AdminPanel";
import SignIn from "./pages/pages/Authentication/SignIn";
import SignUp from "./pages/pages/Authentication/SignUp";
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
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/sign-in" element={<SignIn />} />
          <Route path="/admin/sign-up" element={<SignUp />} />
          {/* ////////////////////////////////////////////////////////////  */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/lifeatie" element={<LifeAtIe />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/job-details/:id" element={<JobDetails />} />
          <Route path="/ApplyForm" element={<ApplyForm />} />
        </Routes>
        {/* <Home /> */}
      </div>
    </>
  );
}

export default App;

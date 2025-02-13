import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";
import Benefits from "./pages/Benefits";
import LifeAtIe from "./pages/LifeAtIe";

import JobDetails from "./pages/JobDetails";
import ApplyForm from "./pages/ApplyForm";

import Layout from "./components/Layout";

{
  /*import JobDescription from './components/JobDescription';*/
}

function App() {
  return (
    <>
      <Layout>
        <div className="">
          {/*<JobDescription />*/}
          <Routes>
            {/* //////////////////////////////  Admin route //////////////// */}

            {/* ////////////////////////////////////////////////////////////  */}

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/lifeatie" element={<LifeAtIe />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/job-details/:id" element={<JobDetails />} />
            <Route path="/ApplyForm/:id" element={<ApplyForm />} />
          </Routes>
          {/* <Home /> */}
        </div>
      </Layout>
    </>
  );
}

export default App;

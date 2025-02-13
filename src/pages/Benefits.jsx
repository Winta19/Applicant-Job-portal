// function Benefits() {
//   return (
//     <>
//       <h1>Benefits</h1>
//     </>
//   );
// }

// export default Benefits;

/////////////////////////////////////////////////

import { Link } from "react-router-dom";
import { FaBriefcase, FaCogs, FaUsers, FaHeartbeat } from "react-icons/fa";
import companyImage1 from "../assets/selam.png"; // Image 1
import companyImage2 from "../assets/ahmed.png"; // Image 2

function Benefits() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-primary_ie text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Why Work With Us
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto">
          Discover the amazing benefits of being part of the IE Network
          Solutions team!
        </p>
      </section>

      {/* Benefits List */}
      <section className="px-6 md:px-20 py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center text-primary_ie mb-8">
          Our Benefits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Benefit 1 */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg">
            <FaBriefcase className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-primary_ie">
              Competitive Salary
            </h3>
            <p className="text-lg mt-2">
              We offer highly competitive salary packages based on your
              experience and skills.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg">
            <FaCogs className="text-primary_ie text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-primary_ie">
              Career Development
            </h3>
            <p className="text-lg mt-2">
              We invest in your career growth with training and development
              opportunities.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg">
            <FaUsers className="text-primary_ie text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-primary_ie">
              Work-Life Balance
            </h3>
            <p className="text-lg mt-2">
              Enjoy flexible working hours and the option to work remotely to
              maintain a healthy work-life balance.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg">
            <FaHeartbeat className="text-primary_ie text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-primary_ie">
              Health & Wellness
            </h3>
            <p className="text-lg mt-2">
              We offer health insurance and wellness programs to keep our team
              happy and healthy.
            </p>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center text-primary_ie mb-8">
          What Our Employees Say
        </h2>
        <div className="flex flex-wrap items-center justify-center mt-8">
          {/* Left side - Images */}
          <div className="flex flex-col items-center space-y-4 pr-8">
            <img
              src={companyImage1} // First image
              alt="Team Member 1"
              className="w-32 h-32 object-cover rounded-full shadow-lg"
            />
            <img
              src={companyImage2} // Second image
              alt="Team Member 2"
              className="w-32 h-32 object-cover rounded-full shadow-lg"
            />
          </div>
          <div className="flex-1 max-w-2xl p-4 space-y-10">
            <blockquote className="italic text-lg border-l-4 border-primary_ie pl-4">
              "The work-life balance at IE is incredible! I can work remotely
              when needed and still be productive." — Selam, Team Lead
            </blockquote>
            <blockquote className="italic text-lg border-l-4 border-primary_ie pl-4">
              "The salary and benefits package here is very competitive. It
              feels great to be recognized for my work!" — Ahmed, Senior
              Developer
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-20 py-16 bg-primary_ie text-white text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to Join Our Team?</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Apply now to start your journey with IE Network Solutions. We are
          always looking for talented and motivated individuals!
        </p>
        <Link to="/careers">
          <button className="bg-primary_ie text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Explore Careers
          </button>
        </Link>
      </section>
    </>
  );
}

export default Benefits;

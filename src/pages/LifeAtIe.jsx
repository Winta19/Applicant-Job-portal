// function LifeAtIe() {
//   return (
//     <>
//       <h1>LifeAtIe</h1>
//     </>
//   );
// }

// export default LifeAtIe;

//////////////////////////////////////////////

import { Link } from "react-router-dom";
import companyImage1 from "../assets/tesfsh.png"; // Image 1
import companyImage2 from "../assets/sura.png"; // Image 2
import companyImage3 from "../assets/staff.png"; // Image 3

function LifeAtIe() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-primary_ie text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Life at IE Network Solutions
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto">
          Join a diverse team of innovators, creators, and problem-solvers.
          Discover what it's like to work at a forward-thinking, fast-growing
          company.
        </p>
      </section>

      {/* Employee Testimonials with Images */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center text-primary_ie">
          What Our Team Says
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

          {/* Right side - Testimonials */}
          <div className="flex-1 max-w-2xl p-4 space-y-6">
            <blockquote className="italic text-lg border-l-4 border-primary_ie pl-4">
              "Working at IE Network Solutions has been an incredible journey.
              The team is supportive, and the opportunities for growth are
              endless!" — Tesfahun, Junior Developer
            </blockquote>
            <blockquote className="italic text-lg border-l-4 border-primary_ie pl-4">
              "I love the work culture here! It's collaborative, challenging,
              and truly rewarding." — Surafel, Team Lead
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="px-6 md:px-20 py-16 bg-blue-50">
        <h2 className="text-3xl font-semibold text-center text-primary_ie">
          Our Culture
        </h2>
        <p className="mt-4 text-lg text-center max-w-3xl mx-auto">
          At IE, we believe in work-life balance, creativity, and a supportive
          environment. We constantly encourage personal growth, teamwork, and
          innovation.
        </p>
        <div className="mt-8 text-center">
          <img
            src={companyImage3} // Replace with your actual team photo URL or local path
            alt="Team at IE Network Solutions"
            className="w-full md:w-20 h-110 object-cover rounded-lg mx-auto shadow-lg"
          />
          <p className="mt-4 text-lg">
            Team outing at our annual company retreat.
          </p>
        </div>
      </section>

      {/* Perks & Benefits Section
      <section className="px-6 md:px-20 py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center text-blue-800">
          Perks & Benefits
        </h2>
        <ul className="list-disc ml-6 mt-8 text-lg text-center max-w-3xl mx-auto">
          <li>Competitive salary and benefits package</li>
          <li>Flexible working hours and remote work options</li>
          <li>Health and wellness programs</li>
          <li>Career development and training opportunities</li>
          <li>Team-building events and activities</li>
        </ul>
      </section> */}

      {/* Call to Action (CTA) Section */}
      <section className="px-6 md:px-20 py-16 bg-primary_ie text-white text-center">
        <h3 className="text-2xl font-semibold mb-4">Join Our Team</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          If you're passionate about technology, innovation, and growth, we want
          you to join our team. Explore our open positions and take the next
          step in your career with us.
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

export default LifeAtIe;

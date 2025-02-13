// function AboutUs() {
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
//       <p className="text-lg text-gray-700 text-center mb-6">
//         Welcome to <span className="font-semibold">[Your Job Portal Name]</span>
//         , where talent meets opportunity. We connect top candidates with leading
//         companies to create a seamless hiring experience.
//       </p>

//       {/* Our Mission Section */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
//         <p className="text-gray-600">
//           Our goal is to simplify the job search process for applicants while
//           helping businesses find the right talent efficiently. We provide a
//           platform that makes hiring **faster, smarter, and more transparent**.
//         </p>
//       </div>

//       {/* How It Works Section */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
//         <ul className="list-disc list-inside text-gray-600">
//           <li>📝 **Team Leaders/Admins** post job requirements.</li>
//           <li>📢 **HR Professionals** publish job listings.</li>
//           <li>✅ **Approvers** review and approve postings.</li>
//           <li>🎯 **Candidates** apply with ease & track their progress.</li>
//         </ul>
//       </div>

//       {/* Why Choose Us Section */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
//         <ul className="list-disc list-inside text-gray-600">
//           <li>🚀 Fast & user-friendly application process.</li>
//           <li>🔍 Transparent hiring stages & real-time updates.</li>
//           <li>💼 Connect with top companies & find your dream job.</li>
//         </ul>
//       </div>

//       {/* Contact Info */}
//       <div className="text-center">
//         <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
//         <p className="text-gray-600">
//           Have questions? Reach out to us at
//           <span className="font-semibold text-blue-500">
//             {" "}
//             support@yourjobportal.com
//           </span>
//           .
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;

//////////////////////////////////////

// import companyImage from "../assets/IElogo.png"; // Adjust the path as needed

// function AboutUs() {
//   return (
//     <div className="bg-gray-100 py-10">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//         <img
//           src={companyImage}
//           alt="IE Network Solutions"
//           className="w-[100px] h-[100px] object-cover"
//         />
//         <div className="p-4">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
//             About IE Network Solutions
//           </h1>
//           <p className="text-gray-600 mb-4">
//             IE Network Solutions Plc (IE Networks) is a fully Ethiopian-owned
//             company established in December 2008. Since its inception, IE
//             Networks has been dedicated to providing value-maximizing,
//             service-oriented solutions, distinguishing itself from volume-based,
//             sales-oriented approaches.
//           </p>
//           <p className="text-gray-600 mb-4">
//             Over the years, IE Networks has become a leading enterprise
//             solutions provider in Ethiopia. Through partnerships with globally
//             renowned companies such as Dell, IBM, and Cisco, IE Networks offers
//             top-tier products and services that meet international standards,
//             solidifying its reputation as a world-class company operating on the
//             African continent.
//           </p>
//           <p className="text-gray-600">
//             The Company's expertise spans various domains, including:
//           </p>
//           <ul className="list-disc list-inside text-gray-600 mb-4">
//             <li>
//               Compute, Storage, Hyper-Converged Infrastructure, and Data
//               Protection Systems
//             </li>
//             <li>Server, Desktop, and Storage Virtualization</li>
//             <li>
//               Application Delivery, Load Balancing, Disaster Recovery, OS and
//               Firmware Support
//             </li>
//             <li>
//               Cloud Automation, Data Center Orchestration, Private & Public
//               Cloud
//             </li>
//             <li>Network & WLAN Solutions</li>
//             <li>Software Services</li>
//             <li>System and Cloud Solutions</li>
//             <li>Data Center Facility & Power</li>
//             <li>Smart City and Infrastructure</li>
//             <li>Cybersecurity Solutions</li>
//           </ul>
//           <p className="text-gray-600">
//             For more information, visit our website:{" "}
//             <a
//               href="https://www.ienetworksolutions.com/"
//               className="text-blue-500 hover:underline"
//             >
//               www.ienetworksolutions.com
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;

///////////////?????????????????????????////////////

import { FaCheckCircle } from "react-icons/fa";
import companyImage from "../assets/IElogo.png"; // Adjust the path as needed

function AboutUs() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col items-center p-6 bg-blue-600 text-white">
          <img
            src={companyImage}
            alt="IE Network Solutions"
            className="w-24 h-24 object-contain mb-4"
          />
          <h1 className="text-4xl font-bold text-center">
            About IE Network Solutions
          </h1>
        </div>

        {/* About Section */}
        <div className="p-8">
          <p className="text-gray-700 text-lg mb-4">
            <span className="font-semibold">IE Network Solutions Plc</span> is a
            fully Ethiopian-owned company, established in December 2008. Our
            mission is to deliver value-driven, service-oriented IT solutions,
            distinguishing us from sales-focused competitors.
          </p>
          <p className="text-gray-700 text-lg">
            As a leading enterprise solutions provider in Ethiopia, we
            collaborate with top-tier global brands like  Dell, IBM, and Cisco,
            ensuring world-class services within the African continent.
          </p>
        </div>

        {/* Vision, Mission & Values */}
        <div className="p-8 bg-gray-50">
          {/* Vision */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              🌍 Our Vision
            </h2>
            <p className="text-gray-700 text-lg">
              To be the leading technology solutions provider in Africa,
              empowering businesses with innovative and reliable IT services.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              🚀 Our Mission
            </h2>
            <p className="text-gray-700 text-lg">
              To deliver cutting-edge, customer-centric IT solutions that drive
              business success and technological growth in Ethiopia and beyond.
            </p>
          </div>

          {/* Core Values */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              💡 Core Values
            </h2>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" /> Innovation &
                Excellence
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" /> Integrity &
                Transparency
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" /> Customer
                Satisfaction
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" /> Teamwork &
                Collaboration
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" /> Continuous Growth &
                Learning
              </li>
            </ul>
          </div>
        </div>

        {/* Services */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            📌 Our Expertise
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Cloud Computing &
              Data Centers
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Cybersecurity
              Solutions
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Software Development
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Smart City &
              Infrastructure
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Networking & IT
              Consultancy
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Disaster Recovery
              Solutions
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="p-6 bg-blue-600 text-white text-center">
          <p className="text-lg">
            📩 Visit us online at:
            <a
              href="https://www.ienetworksolutions.com/"
              className="underline ml-1 hover:text-gray-200"
            >
              www.ienetworksolutions.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

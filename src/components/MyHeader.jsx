// import { Link } from "react-router-dom";
// export default function MyHeader(){
//     return (
//         <>
//         <div className="flex px-20 py-2 justify-between border-b items-center">
//         <Link to="/">
//           <div className="flex w-10 h-10 bg-blue-500 text-white rounded-full justify-center items-center text-lg">IE</div>
//           </Link>
//           <div className="flex space-x-10">

//             <Link to="/about">About Us</Link>
//             <Link to="/lifeatie">Life at IE</Link>
//             <Link to="/benefits">Benefits</Link>

//           </div>

//           <div>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-full">See Openings</button>
//           </div>
//         </div>
//         </>
//     );
// }

//////////////////////////////

import { Link } from "react-router-dom";
import companyImage from "../assets/IElogo.png"; // Adjust the path as needed

export default function MyHeaders() {
  return (
    <>
      <div className="flex px-20 py-2 justify-between border-b items-center">
        <Link to="/">
          <div className="flex items-center">
            {/* Logo Image */}
            <img
              src={companyImage}
              alt="IE Network Solutions"
              className="w-10 h-10 object-contain mb-4"
            />
            {/* className="w-10 h-10 bg-blue-500 text-white rounded-full mr-2" */}
          </div>
        </Link>
        <div className="flex space-x-10">
          <Link to="/about">About Us</Link>
          <Link to="/lifeatie">Life at IE</Link>
          <Link to="/benefits">Benefits</Link>
        </div>

        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            See Openings
          </button>
        </div>
      </div>
    </>
  );
}

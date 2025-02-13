// export default function HeroSection() {
//   return (
//     <>
//       <div className="flex flex-col px-20 py-12 space-y-2">
//         <h1 className="text-5xl font-semibold">Join IE Network Solutions</h1>
//         <p>
//           Are you seeking more challenges in a fast growing professional company
//           with disciplined work culture? Why settle for less when you can aim
//           for world-class IT company right here in Ethiopia.
//         </p>
//       </div>
//     </>
//   );
// }

//////////////////////////////////////////

//import companyImage from "../assets/banner_bg.png"; // Image 1
export default function HeroSection() {
  return (
    <div
      className="relative w-full h-[35vh] md:h-[40vh] flex items-center justify-center bg-cover bg-center px-6 md:px-20 bg-primary_ie text-black"
      //   style={{
      //     backgroundImage:
      //       "url('https://source.unsplash.com/1600x900/?technology,office')",
      //   }}
    >
      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-primary_ie bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center  max-w-xl">
        <h1 className="text-4xl md:text-4xl font-bold leading-tight">
          Join <span className="">IE Network Solutions</span>
        </h1>
        <p className="text-lg md:text-xl mt-4">
          Seeking new challenges in a fast-growing company with a disciplined
          work culture? Be part of a world-class IT company right here in
          Ethiopia.
        </p>

        {/* CTA Button */}
        {/* <div className="mt-4">
          <a
            href="/careers"
            className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Explore Careers
          </a>
        </div> */}
      </div>
    </div>
  );
}

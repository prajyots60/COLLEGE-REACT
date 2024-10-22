// const Header = () => {
  

//   return (
//     <nav className="bg-emerald-dark text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo / College Name */}
//         <div className="text-2xl font-bold">College Name</div>

//         {/* Links - Desktop View */}
//         <ul className="hidden md:flex space-x-8">
//           <li><a href="/" className="hover:text-emerald-light">Home</a></li>
//           <li><a href="/about" className="hover:text-emerald-light">About</a></li>
//           <li><a href="/admissions" className="hover:text-emerald-light">Admissions</a></li>
//           <li><a href="/courses" className="hover:text-emerald-light">Courses</a></li>
//           <li><a href="/contact" className="hover:text-emerald-light">Contact</a></li>
//         </ul>

//         {/* CTA Button */}
//         <a
//           href="/apply"
//           className="hidden md:block bg-emerald-light text-emerald-dark px-4 py-2 rounded-md font-bold hover:bg-emerald"
//         >
//           Apply Now
//         </a>


//       </div>

//     </nav>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";



const Header = () => {
return (
  <header className="fixed top-0 left-0 w-full bg-emerald-dark">
    <div className="container mx-auto px-4 py-3">
      <div className="flex flex-wrap justify-between items-center">
        <Link to={"/"} className="text-2xl font-bold text-emerald-200 flex justify-center">
        VESIT
        </Link>

        <nav className="flex flex-wrap gap-4 items-center">
          <Link to={"/"} className="text-2xl font-semibold text-emerald-300 flex">
            Home
          </Link>

          <Link to={"/about"} className="text-2xl font-semibold text-emerald-300 flex">
          About
          </Link>

          <Link to={"/contact"} className="text-2xl font-semibold text-emerald-300 flex">
          Contact Us
          </Link>
        </nav>
      </div>
    </div>

  </header>
);
};

export default Header;


import Logo from "../assets/Images/logo-text.png";
import { useState } from "react";

/* Hamburger Icon */
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [menuHamburger, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-400">

      <div className="container mx-auto px-4 py-4">

        <div className="flex items-center justify-between relative">

          {/* Hamburger*/}
          <button onClick={() => setMenuOpen(!menuHamburger)} className="md:hidden text-2xl cursor-pointer">
            <RxHamburgerMenu />
          </button>

          {/* Logo */}
          <div className="md:static absolute left-1/2 -translate-x-1/2">
            <img src={Logo} alt="Dev Stack Logo" className="w-32 md:w-auto"/>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">

            <ul className="flex gap-2 lg:gap-4 items-center">
              <li className="hover:text-[#D91B7E] px-2 py-1 font-semibold">
                <a href="">Home</a>
              </li>
              <li className="hover:text-[#D91B7E] px-2 py-1 font-semibold">
                <a href="">Technologies</a>
              </li>
              <li className="hover:text-[#D91B7E] px-2 py-1 font-semibold">
                <a href="">Projects</a>
              </li>
              <li className="hover:text-[#D91B7E] px-2 py-1 font-semibold">
                <a href="">About</a>
              </li>
              <li className="hover:text-[#D91B7E] px-2 py-1 font-semibold">
                <a href="">Contact</a>
              </li>
            </ul>

          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-2 lg:gap-4">

            <button className="border border-[#D91B7E] text-black hover:bg-[#D91B7E] hover:text-white px-3 lg:px-4 py-2 rounded-3xl hover:scale-105 transition-all duration-300 cursor-pointer">Sign In</button>

            <button className="border border-[#D91B7E] text-black hover:bg-[#D91B7E] hover:text-white px-3 lg:px-4 py-2 rounded-3xl hover:scale-105 transition-all duration-300 cursor-pointer">Sign Up</button>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuHamburger && (
          <div className="md:hidden mt-4 border-t pt-4">

            <ul className="flex flex-col gap-2">

              <li className="hover:bg-[#D91B7E] hover:text-white px-3 py-2 rounded-3xl">
                <a href="">Home</a>
              </li>

              <li className="hover:bg-[#D91B7E] hover:text-white px-3 py-2 rounded-3xl">
                <a href="">Technologies</a>
              </li>

              <li className="hover:bg-[#D91B7E] hover:text-white px-3 py-2 rounded-3xl">
                <a href="">Projects</a>
              </li>

              <li className="hover:bg-[#D91B7E] hover:text-white px-3 py-2 rounded-3xl">
                <a href="">About</a>
              </li>

              <li className="hover:bg-[#D91B7E] hover:text-white px-3 py-2 rounded-3xl">
                <a href="">Contact</a>
              </li>
                
              {/* Desktop Buttons */}
              <div className="flex gap-2 pt-2">
                <button className="border border-[#D91B7E] text-black hover:bg-[#D91B7E] hover:text-white px-4 py-2 rounded-3xl">Sign In</button>

                <button className="border border-[#D91B7E] text-black hover:bg-[#D91B7E] hover:text-white px-4 py-2 rounded-3xl">Sign Up</button>
              </div>

            </ul>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
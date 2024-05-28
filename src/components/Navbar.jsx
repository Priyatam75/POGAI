import { useState } from "react";

import { close, prognostic, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // bg color: FEFEFE
  // register color: FF0031

  return (
    <nav className="w-full flex justify-between items-center navbar bg-[#FEFEFE]">
      {/* photo */}
      <img src={prognostic} alt="hoobank" className="w-[150px] h-[150px]" />

    {/* nav elements */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-[#061a4b]" : "text-[#092689]"
            } ${index === navLinks.length - 1 ? "text-[#FF0031] mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Drop down for smaller screens */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#4F5D75]  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar mt-5`} 
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-[#D3D3D3]" : "text-white"
                } ${index === navLinks.length - 1 ? "text-[#FF0031]  mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;

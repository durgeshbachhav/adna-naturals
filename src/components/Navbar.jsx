"use client";

import React, { useRef, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import gsap from 'gsap';
import logo from "../assets/logo/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = useRef(null);

  const navlinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Our Journey", to: "/ourjourney" },
    { name: "Products", to: "/products" },
    { name: "Blog", to: "/blog" },
    { name: "Why We", to: "/why" },
    { name: "Contact", to: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, { duration: 0.5, y: 0, ease: "circ.in", });
    } else {
      gsap.to(menuRef.current, { duration: 0.5, y: "-100%", ease: "power3.in" });
    }
  }, [isMenuOpen]);

  return (
    <div className="border-b-4 backdrop:bg-black border-white  backdrop:opacity-15  backdrop-blur-lg w-full fixed h-[100px] z-50 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 px-8">
        <div className="inline-flex items-center">
          <span></span>
          <Link to={`/`} className="font-bold">
            <img
              src={logo}
              className="w-32  rounded-full"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex">
            {navlinks.map((item) => (
              <Link key={item.name} to={item.to} className="btn">
                {item.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <TfiMenuAlt
            color="white"
            onClick={toggleMenu}
            className="h-6 w-6 cursor-pointer"
          />
        </div>
        <div
          ref={menuRef}
          className={`absolute inset-x-0 top-0 z-50 p-2 transition-transform duration-300 ease-in-out lg:hidden bg-green-900 transform ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-2">
                  <Link to={`/`} className="font-bold">
                    <img
                      src={logo}
                      className="w-20 h-20 bg-yellow-500 rounded-full"
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    <span className="sr-only">Close menu</span>
                    <MdCancel
                      color="white"
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-4">
                  {navlinks.map((item) => (
                    <Link key={item.name} to={item.to} className="btn">
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

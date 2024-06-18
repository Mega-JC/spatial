import SpatialLogo from "@/assets/spatial_logo.svg";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import cn from "classnames";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="from-dark-purple sticky top-0 z-50 w-full bg-gradient-to-b to-transparent text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">
          <a href="/">
            <SpatialLogo className="m-2 mr-16 h-16" />
          </a>
        </div>
        <div className="md:hidden z-50">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
          </button>
        </div>
        <ul
          className={cn(
            "fixed left-0 top-0 flex h-full w-full transform flex-col items-center justify-center space-y-6 bg-gray-900 transition-transform lg:text-sm md:relative md:h-auto md:w-auto md:flex-row md:justify-end md:space-x-8 md:space-y-0 md:bg-transparent",
            {
              "translate-x-0": isOpen,
              "-translate-x-full md:translate-x-0": !isOpen,
            },
          )}
        >
          <li>
            <Link
              href="#noble-series"
              className="text-2xl hover:text-gray-400 md:text-base"
            >
              NOBLE Series
            </Link>
          </li>
          <li>
            <Link
              href="#noble-series-business"
              className="text-2xl hover:text-gray-400 md:text-base"
            >
              NOBLE Series Business
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="text-2xl hover:text-gray-400 md:text-base"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-2xl hover:text-gray-400 md:text-base"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#careers"
              className="text-2xl hover:text-gray-400 md:text-base"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-2xl hover:text-gray-400 md:text-base"
            >
              Contact
            </Link>
          </li>
          <li className="mr-8">
            <Link
              href="#contact"
              className="text-2xl hover:text-gray-400 md:text-base"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

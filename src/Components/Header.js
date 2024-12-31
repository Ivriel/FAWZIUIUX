import React, { useState } from 'react';
import logo from '../assets/logo.png';

function Header({ setShow }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Navbar dengan posisi fixed */}
      <nav className="flex items-center justify-between h-[68px] z-[1] fixed top-0 left-0 right-0 bg-white px-[20px] lg:px-[70px]">
        <span className="flex items-center">
          <a href="/" className="p-0 m-0 mt-[-15px]">
            <img
              src={logo}
              alt="logo"
              className="w-[150px] h-[60px] lg:w-[200px] lg:h-[80px]"
              title="FAWZIUIUX Homepage"
            />
          </a>
        </span>
        {/* Hamburger menu untuk perangkat kecil */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
        {/* Menu utama */}
        <ul
  className={`${
    menuOpen
      ? 'block absolute top-[68px] left-0 w-full bg-white shadow-md p-4 text-center' // Tambahkan text-center
      : 'hidden'
  } lg:flex lg:static lg:shadow-none lg:p-0 lg:gap-10 items-center justify-center`} // Tambahkan justify-center
>
          <li className="mt-2 lg:mt-0 py-2">
            <a href="/" className="block hover:text-orange-600">
              Home
            </a>
          </li>
          <li className="mt-2 lg:mt-0 py-2">
            <a
              onClick={() => setShow('Profile')}
              className="block hover:text-orange-600 hover:cursor-pointer"
            >
              About Me
            </a>
          </li>
          <li className="mt-2 lg:mt-0 py-2">
            <a
              onClick={() => setShow('Services')}
              className="block hover:text-orange-600 hover:cursor-pointer"
            >
              Services
            </a>
          </li>
          <li className="mt-2 lg:mt-0 py-2">
            <a
              onClick={() => setShow('Projects')}
              className="block hover:text-orange-600 hover:cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li className="mt-2 lg:mt-0 py-2">
            <a
              onClick={() => setShow('Testimonials')}
              className="block hover:text-orange-600 hover:cursor-pointer"
            >
              Testimonials
            </a>
          </li>
          <li className="mt-2 lg:mt-0 py-2">
            <a
              onClick={() => setShow('Contact')}
              className="block hover:text-orange-600 hover:cursor-pointer"
            >
              Contact
            </a>
          </li>
          <li className="mt-2 lg:mt-0 py-2">
            <a
              className="block bg-[#FD6F00] text-white px-[15px] py-[10px] rounded-md hover:bg-orange-600 text-center"
              title="Download CV"
              href="/MyCV.pdf"
              download="CV_Ivriel.pdf"
            >
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

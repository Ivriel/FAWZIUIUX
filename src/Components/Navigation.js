import React from 'react';
import Logo from '../assets/logo.png';
import Facebook from '../assets/Facebook - Negative.png';
import Twitter from '../assets/Twitter - Negative.png';
import Instagram from '../assets/Instagram - Negative.png';
import LinkedIn from '../assets/LinkedIn - Negative.png';

function Navigation({ setShow }) {
  return (
    <div className="px-4 md:px-10">
      {/* Logo */}
      <div className="flex justify-center">
        <a href="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-[200px] h-[80px] md:w-[250px] md:h-[100px] lg:w-[300px] lg:h-[120px] cursor-pointer"
            title="FAWZIUIUX Homepage"
          />
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mt-8 md:mt-10 lg:mt-12">
        <li>
          <a
            href="/"
            className="hover:cursor-pointer text-sm md:text-base lg:text-lg"
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => setShow('Profile')}
            className="hover:cursor-pointer text-sm md:text-base lg:text-lg"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            onClick={() => setShow('Services')}
            className="hover:cursor-pointer text-sm md:text-base lg:text-lg"
          >
            Services
          </a>
        </li>
        <li>
          <a
            onClick={() => setShow('Projects')}
            className="hover:cursor-pointer text-sm md:text-base lg:text-lg"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            onClick={() => setShow('Testimonials')}
            className="hover:cursor-pointer text-sm md:text-base lg:text-lg"
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            onClick={() => setShow('Contact')}
            className="hover:cursor-pointer text-sm md:text-base lg:text-lg"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Social Media Icons */}
      <div className="flex gap-5 mt-10 md:mt-14 lg:mt-16 justify-center mb-8 md:mb-12 lg:mb-10">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <img src={Facebook} alt="Facebook" className="w-[20px] md:w-[25px]" />
        </a>
        <a
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <img src={Twitter} alt="Twitter" className="w-[20px] md:w-[25px]" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <img src={Instagram} alt="Instagram" className="w-[20px] md:w-[25px]" />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <img src={LinkedIn} alt="LinkedIn" className="w-[20px] md:w-[25px]" />
        </a>
      </div>
    </div>
  );
}

export default Navigation;

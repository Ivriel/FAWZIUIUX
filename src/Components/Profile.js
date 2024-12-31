import React, { forwardRef } from 'react';
import ImageProfile from '../assets/image_person.png';
import Facebook from '../assets/Facebook - Negative.png';
import Twitter from '../assets/Twitter - Negative.png';
import Instagram from '../assets/Instagram - Negative.png';
import LinkedIn from '../assets/LinkedIn - Negative.png';

function Profile(props, ref) {
  return (
    <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between mt-10 lg:mt-[160px]" ref={ref}>
      <div data-aos="fade-up" className="text-center lg:text-left">
        <h5 className="font-bold text-[15px]">Hi I am</h5>
        <h1 className="font-bold text-[30px] text-[#FD6F00]">Fawzi Sayed</h1>
        <h1 className="font-bold text-[40px] lg:text-[60px]">Website </h1>
        <h1 className="font-bold text-[40px] lg:text-[60px] mt-[-5px] lg:mt-[-10px]">Developer </h1>
        <p className="w-full lg:w-[65%] mb-7 mx-auto lg:mx-0 lg:text-left">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </p>
        <button data-aos="zoom-out" data-aos-duration="2000">
          <a href="/" className="bg-[#FD6F00] text-white px-[30px] lg:px-[50px] py-[10px] rounded-md">Hire Me</a>
        </button>
      </div>
      <div className="mt-10 lg:mt-0">
        <img src={ImageProfile} alt="Profile" className="w-[250px] lg:w-[600px] mx-auto lg:mx-0 cursor-pointer" title='Me' data-aos="zoom-in" />
        <div className="flex gap-5 justify-center lg:justify-center mt-5">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-zoom-in" data-aos-duration="3000" title='Facebook'>
            <img src={Facebook} alt="Facebook" className="w-[20px] lg:w-[25px]" />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-zoom-in" data-aos-duration="3000" data-aos-delay="300" title='Twitter'>
            <img src={Twitter} alt="Twitter" className="w-[20px] lg:w-[25px]" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-zoom-in" data-aos-duration="3000" data-aos-delay="600" title='Instagram'>
            <img src={Instagram} alt="Instagram" className="w-[20px] lg:w-[25px]" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-zoom-in" data-aos-duration="3000" data-aos-delay="900" title='LinkedIn'>
            <img src={LinkedIn} alt="LinkedIn" className="w-[20px] lg:w-[25px]" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Bungkus Profile dengan forwardRef agar menerima ref
export default forwardRef(Profile);

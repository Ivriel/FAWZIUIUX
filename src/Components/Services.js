import React, { forwardRef } from 'react';
import Image1 from '../assets/Vector1.png';
import Image2 from '../assets/webdesign.png';
import Image3 from '../assets/appdesign.png';
import Image4 from '../assets/Vector4.png';

function Services(props, ref) {
  return (
    <div
      ref={ref}
      className="w-full bg-[#FFF6E7] mt-[40px] px-4 sm:px-6 lg:px-[70px] pt-[60px] pb-[60px] min-h-screen"
      data-aos="fade-in"
      data-aos-duration="4000"
      data-aos-delay="400"
    >
      <h1
        className="font-bold text-center text-[32px] sm:text-[40px] lg:text-[50px]"
        data-aos="fade-up"
        data-aos-duration="4000"
      >
        Services
      </h1>
      <p
        className="text-center mt-6 text-[14px] sm:text-[16px] lg:text-[18px] flex justify-center"
        data-aos="fade-up"
        data-aos-duration="4000"
        data-aos-delay="500"
      >
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus
        <br className="hidden lg:block" />
        netus in. Aliquet donec morbi convallis pretium
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        data-aos="zoom-in"
        data-aos-duration="4000"
        data-aos-delay="600"
      >
        {/* Service Card 1 */}
        <div className="bg-white px-[20px] py-[40px] rounded-md transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:cursor-pointer">
          <img src={Image1} alt="UI/UX" />
          <h1 className="font-bold text-[22px] sm:text-[24px] lg:text-[28px] mt-6">UI/UX</h1>
          <p className="mt-4 text-[14px] sm:text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
          </p>
        </div>
        {/* Service Card 2 */}
        <div className="bg-white px-[20px] py-[40px] rounded-md transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:cursor-pointer">
          <img src={Image2} alt="Web Design" />
          <h1 className="font-bold text-[22px] sm:text-[24px] lg:text-[28px] mt-6">Web Design</h1>
          <p className="mt-4 text-[14px] sm:text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
          </p>
        </div>
        {/* Service Card 3 */}
        <div className="bg-white px-[20px] py-[40px] rounded-md transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:cursor-pointer">
          <img src={Image3} alt="App Design" />
          <h1 className="font-bold text-[22px] sm:text-[24px] lg:text-[28px] mt-6">App Design</h1>
          <p className="mt-4 text-[14px] sm:text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
          </p>
        </div>
        {/* Service Card 4 */}
        <div className="bg-white px-[20px] py-[40px] rounded-md transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:cursor-pointer">
          <img src={Image4} alt="Graphic Design" />
          <h1 className="font-bold text-[22px] sm:text-[24px] lg:text-[28px] mt-6">Graphic Design</h1>
          <p className="mt-4 text-[14px] sm:text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
          </p>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Services);

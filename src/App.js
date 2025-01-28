import React, { useState, useRef, useEffect } from 'react';
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Services from "./Components/Services";
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "./App.css";
import "@fontsource/poppins";

function App() {
  const [show, setShow] = useState();
  const ref = useRef();  // Profile
  const ref2 = useRef(); // Services
  const ref3 = useRef(); // Projects
  const ref4 = useRef(); // Testimonials
  const ref5 = useRef(); // Contact

  // Inisialisasi AOS untuk animasi
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya muncul sekali
    });
  }, []);

  // Scroll ke bagian tertentu berdasarkan 'show'
  useEffect(() => {
    if (show === 'Profile') {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (show === 'Services') {
      ref2.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (show === 'Projects') {
      ref3.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (show === 'Testimonials') {
      ref4.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (show === 'Contact') {
      ref5.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [show]);

  // Tambahkan Tawk.to script
  useEffect(() => {
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/679910e5825083258e0c60a6/1iimuk1gi';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
  }, []); // Hanya dijalankan sekali saat komponen di-mount

  return (
    <div>
      <div className="w-full px-[70px]">
        <Header setShow={setShow} ref={ref} />
        <Profile ref={ref} />
      </div>
      <Services ref={ref2} />
      <div className="w-full px-[70px]">
        <Projects ref={ref3} />
      </div>
      <Contact ref={ref5} />
      <Navigation setShow={setShow} />
      <Footer />
    </div>
  );
}

export default App;

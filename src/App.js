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
  useEffect(() => {
  AOS.init({
    duration: 1000, // Durasi animasi
    once: true, // Animasi hanya muncul sekali
  });
}, []);
  useEffect(() => {
    // Cek jika 'show' sudah diubah dan baru scroll setelah itu
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
  }, [show]);  // Hanya jalan ketika 'show' berubah, bukan saat pertama kali render

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

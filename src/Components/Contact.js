import React, { useState, forwardRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Contact(props, ref) {
  const [email, setEmail] = useState('');

  const handleSendEmail = (e) => {
    e.preventDefault();

    if (email) {
      emailjs
        .send(
          'service_eynxbi4', // Service ID
          'template_b8h08uy', // Template ID
          { to_email: email }, // Supaya kekirim ke email yang diisi
          '_nac3SZMiBttFjja8' // User ID
        )
        .then(
          (result) => {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: 'success',
              title: 'Berhasil Terkirim',
            });
            setEmail('');
          },
          (error) => {
            console.error('Error:', error);
            Swal.fire({
              icon: 'error',
              title: 'Gagal Terkirim',
              text: 'Isi alamat email yang valid!',
            });
          }
        );
    } else {
      alert('Harap masukkan alamat email!');
    }
  };

  return (
    <div
      ref={ref}
      className="h-[400px] mt-16 px-6 lg:px-[70px] bg-[#FFF6E7] text-center pt-[80px]"
    >
      <h1
        className="font-bold text-3xl lg:text-[50px] mt-10"
      >
        Let's Design Together
      </h1>
      <p
        className="text-sm lg:text-base max-w-[650px] mx-auto mt-3"
      >
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>
      <form className="mt-5" onSubmit={handleSendEmail}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="w-full sm:w-[300px] md:w-[400px] h-[50px] px-4 border rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full sm:w-auto h-[50px] px-5 mt-3 sm:mt-0 sm:ml-3 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600"
        >
          Contact Me
        </button>
      </form>
    </div>
  );
}

export default forwardRef(Contact);

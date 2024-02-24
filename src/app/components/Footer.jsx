import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1B1B1B] text-white px-2 py-3 flex items-center mt-auto">
      <Image
        src="/MeetHub-Logo.svg"
        alt="Logo de Meethub"
        width={60}
        height={50}
        className="mr-4"
      />
      <h1 className="text-2xl">Nosotros</h1>
    </footer>
  );
};

export default Footer;

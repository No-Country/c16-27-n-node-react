import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1B1B1B] text-white p-4 flex items-center justify-center mt-auto">
      <Image
        src="/meethub-logo.png"
        alt="Logo de Meethub"
        width={60}
        height={60}
        className="mr-2"
      />
      <h1 className="font-bold text-3xl">Nosotros</h1>
    </footer>
  );
};

export default Footer;

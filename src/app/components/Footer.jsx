import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="w-full bg-[#1B1B1B] text-white px-2 py-3 flex items-center">
      <Image
        src="/MeetHub-Logo.svg"
        alt="Logo de Meethub"
        width={60}
        height={50}
        className="mr-4"
      />
    </footer>
  );
};

export default Footer;

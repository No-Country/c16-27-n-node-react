import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-28 bg-[#1B1B1B] text-white">
      <Image
        src="/meethub-logo.png"
        alt="card image"
        width={60}
        height={60}
        className="mr-2"
      />
      <h1 className="font-bold text-3xl">
        Nosotros
      </h1>
    </section>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";

const CardEvent = ({ img, title, date, type }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl ">
      <Image
        src={img || "/imgCard-1.png"}
        alt="card image"
        width={400}
        height={400}
      />
      <div className="p-5 h-40 flex flex-col justify-center">
        <a href="#">
          <h5 class="mb-2 text-xl font-bold tracking-tight ">
            {title || "Titulo del evento"}
          </h5>
        </a>
        <div className="flex items-center mb-2">
          <Image
            src="/calendarIcon.svg"
            alt="card image"
            width={20}
            height={20}
            className="mr-2"
          />
          <p className="font-normal text-[#FF256F] ">
            {date || "Fecha del evento"}
          </p>
        </div>
        <div className="flex items-center">
          <Image
            src="/locationLogo.svg"
            alt="card image"
            width={20}
            height={20}
            className="mr-2"
          />
          <p className="font-bold text-[#23B0FF] ">
            {type || "Ubicación del evento"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;

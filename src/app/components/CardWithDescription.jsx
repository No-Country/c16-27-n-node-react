import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardWithDescription = ({ img, title, date, location }) => {
  return (
    <div className="border border-slate-300 m-3 flex h-[240px] w-[42rem] bg-white rounded-lg shadow-xl ">
      <Image
        src={img || "/imgCard-1.png"}
        alt="card image"
        width={280}
        height={300}
        className="rounded-lg"
      />
      <div className="p-5 flex flex-col justify-center ">
        <h5 class="mb-2 text-xl font-bold tracking-tight ">
          {title || "Titulo del evento"}
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          sodales lacus, sit amet pretium massa. Fusce sodales ante leo, vitae
          placerat neque egestas at.
        </p>
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
            {location || "Ubicación del evento"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardWithDescription;

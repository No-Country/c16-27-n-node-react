import React from "react";
import Image from "next/image";

const CardWithDescription = ({ image, title, date, type, city, description }) => {
  return (
    <div className="border border-slate-300 m-3 flex h-[500px] md:h-[240px] md:w-[42rem] bg-white rounded-lg shadow overflow-hidden">
      <div className="flex-shrink-0 h-full md:w-64 relative">
        <Image
          src={image}
          alt="card image"
          layout="fill" 
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="p-5 flex flex-col md:justify-center justify-between w-full">
        <div className="md:hidden flex-shrink-0 h-48 relative">
          <Image
            src={image}
            alt="card image"
            layout="fill" 
            objectFit="cover"
            className="rounded-l-lg"
          />
        </div>
        <h5 className="mb-2 text-xl font-bold tracking-tight ">
          {title}
        </h5>
        <p className="leading-5 h-24 md:h-22 overflow-y-scroll">
        {description || "No hay descripción"}
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center pt-3">
            <Image
              src="/calendarIcon.svg"
              alt="card image"
              width={20}
              height={20}
              className="mr-2"
            />
            <p className="font-bold text-radicalRed ">
              {date}
            </p>
          </div>
          <div className="flex items-center">
            {type === "online" ? (
              <Image
                src="/webicon.svg"
                alt="card image"
                width={20}
                height={20}
                className="mr-2"
              />
            ) : (
              <Image
                src="/locationLogo.svg"
                alt="card image"
                width={20}
                height={20}
                className="mr-2"
              />
            )}
            <p
              className={`font-bold text-dodgerBlue ${
                type === "online" ? "text-Shamrock" : ""
              }`}
            >
              {city || "En línea"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithDescription;

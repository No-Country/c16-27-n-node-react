import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardEvent = ({ id, img, title, date, city, type }) => {

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <Link href={`/event/${id}`}>
      <div>
        <Image
          src={img || "/imgCard-1.png"}
          alt="card image"
          width={400}
          height={400}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-3 flex flex-col justify-between h-36">
          <h5 className="mb-2 text-xl font-bold tracking-tight ">
            {title || "Titulo del evento"}
          </h5>
        <div className="flex items-center mb-2">
          <Image
            src="/calendarIcon.svg"
            alt="card image"
            width={20}
            height={20}
            className="mr-2"
          />
          <p className="font-bold text-radicalRed ">
            {date || "Fecha del evento"}
          </p>
        </div>
        {type === "online" 
          ? <div className="flex items-center">
            <Image
              src="/webicon.svg"
              alt="camera icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <p className="font-bold text-[#25CC68] ">
              {city || "Ubicación del evento"}
            </p>
          </div>
          : <div className="flex items-center">
            <Image
              src="/locationLogo.svg"
              alt="location icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <p className="font-bold text-dodgerBlue ">
              {city || "Ubicación del evento"}
            </p>
            </div>
        }
       
      </div>
      </Link>
    </div>
  );
};

export default CardEvent;

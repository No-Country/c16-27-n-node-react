'use client'
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DeleteBtn from './DeleteBtn';
import { useSession } from 'next-auth/react';
import useEvents from '../hooks/useEvents';


const CardEvent = ({ id, img, title, date, city, type }) => {

  const { data: session, status } = useSession();
  const { allEvents } = useEvents();

  const isUserCreator =
    allEvents && 
    session?.user?.email === allEvents.find((event) => event._id === id)?.creatorUserEmail;

  return (
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div>
        {isUserCreator && 
          <div className='absolute right-0'>
            <DeleteBtn id={id} />
          </div>
        }
        <Link href={`/event/${id}`}>
        <div className="max-h-[200px] overflow-hidden">
          <Image
            src={img}
            alt="card image"
            width={390}
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
          {type === "online" ? (
            <div className="flex items-center">
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
          ) : (
            <div className="flex items-center">
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
          )}
        </div>
      </Link>
      </div>
    </div>
  );
};

export default CardEvent;

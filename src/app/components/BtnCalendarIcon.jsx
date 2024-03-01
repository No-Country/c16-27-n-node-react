import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const BtnCalendarIcon = ({ setIsNabBarOpen }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const createEventModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const closeEventModal = () => {
    console.log('Modal de eventos cerrado correctamente');
    setIsModalOpen(false);
    setIsNabBarOpen(false);
  };

  return (
    <>
      <button onClick={createEventModal}>
        <Image
          src={"calendar-plus.svg"}
          alt={"CalendarBtn"}
          width={40}
          height={40}
        />
      </button>
      {isModalOpen && (
        <section className=" top-60 right-0 animate-fade animate-duration-300 text-center h-fit w-36 bg-white text-black absolute md:top-16 md:right-2 rounded-b-lg rounded-t-lg">
          <h1 className='font-bold'>Crear Evento</h1>
          <Link href={'/createEventInPerson'}>
            <div className='bg-dodgerBlue p-2 font-bold  text-white hover:bg-[#7acdfd]'>
              <button onClick={closeEventModal}>Presencial</button>
            </div>
          </Link>
          <Link href={'/createEventOnline'}>
            <div className='bg-Shamrock p-2 font-bold  text-white hover:bg-[#7cdaa1] rounded-b-lg'>
              <button onClick={closeEventModal}>En Línea</button>
            </div>
          </Link>
        </section>
      )}
    </>
  );
};

export default BtnCalendarIcon;
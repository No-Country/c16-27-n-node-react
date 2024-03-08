import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

const BtnCalendarIcon = ({ setIsNabBarOpen }) => {
  const { data: session, status } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createEventModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCreateEventClick = () => {
    status === "authenticated"
      ? createEventModal()
      : Swal.fire("Inicia sesión para crear un evento!");
    setIsModalOpen(false);
    setIsNabBarOpen(false);
  };

  return (
    <>
      <button onClick={createEventModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="grey"
          class="bi bi-calendar-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7" />
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
        </svg>
      </button>
      {isModalOpen && (
        <section className=" top-60 right-0 animate-fade animate-duration-300 text-center h-fit w-36 bg-white text-[#0F0F0F] absolute md:top-16 md:right-2 rounded-b-lg rounded-t-lg">
          <h1 className="font-bold">Crear Evento</h1>
          <Link href={status === "authenticated" ? "/createEventInPerson" : ""}>
            <div className="bg-dodgerBlue p-2 font-bold  text-white hover:bg-[#7acdfd]">
              <button onClick={handleCreateEventClick} className="w-full">Presencial</button>
            </div>
          </Link>
          <Link href={status === "authenticated" ? "/createEventOnline" : ""}>
            <div className="bg-Shamrock p-2 font-bold  text-white hover:bg-[#7cdaa1] rounded-b-lg">
              <button onClick={handleCreateEventClick}>En Línea</button>
            </div>
          </Link>
        </section>
      )}
    </>
  );
};

export default BtnCalendarIcon;

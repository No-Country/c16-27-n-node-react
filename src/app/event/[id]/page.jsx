'use client'
import { useEffect, useState } from 'react';
import { eventsData } from '/eventsData';
import Image from 'next/image';
import Attendee from '@/app/components/Attendee';
import EventMap from '@/app/components/EventMap';
import CalendarDate from '@/app/components/CalendarDate';
import AsistBar from '@/app/components/AsistBar';
import { usersData } from '/usersData';

export default function Event({ params }) {
  const { id } = params;
  const [eventData, setEventData] = useState(null);
  const [creatorUserData, setCreatorUserData] = useState(null);

  useEffect(() => {
    const selectedEvent = eventsData.find(event => event.id === parseInt(id));
    if (selectedEvent) {
      setEventData(selectedEvent);
      const creatorUser = usersData.find(user => user.userId === selectedEvent.creatorUserId);
      if (creatorUser) {
        setCreatorUserData(creatorUser);
      }
    } else {
      console.error(`Evento con ID ${id} no encontrado.`);
    }
  }, [id]);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {eventData ? (
        <main className="mt-8 flex flex-col border border-slate-200 bg-white shadow-lg rounded-lg max-w-[1400px] mx-auto">
          <section className="border-b p-5">
            <h1 className="text-[2rem] font-bold">{eventData.title}</h1>
            <button className="bg-[#23B0FF] text-white p-1 rounded-xl">
              Categoría
            </button>
          </section>
          <section className="flex">
            <section className="w-4/6">
              <article className="relative">
                <Image
                  src={eventData.img}
                  alt={`Imagen del evento ${id}`}
                  width={1000}
                  height={1000}
                  className="w-full h-[500px] object-cover"
                />
              </article>
              <article className="text-xl mt-8 p-3">
                <p>
                  {eventData.description || "No hay descripción"}
                </p>
              </article>
            </section>
            <section className="flex flex-col w-2/6 p-5">
              <article className="flex flex-col justify-center gap-3 h-28 p-3">
                <article className="flex gap-3">
                  <CalendarDate eventData={eventData} />
                </article>
                <article className="flex gap-3">
                  {eventData.type === "online" ? (
                    <Image
                      src="/webicon.svg"
                      alt="card image"
                      width={30}
                      height={20}
                      className="mr-1"
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
                  <h1
                    className={`text-2xl font-bold text-[#23B0FF] ${
                      eventData.type === "online" ? "text-[#25CC68]" : ""
                    }`}
                  >
                    {eventData.type}
                  </h1>
                </article>
              </article>
              <article className="rounded-lg border-t">
                <EventMap eventData={eventData} />
              </article>
              <article className="p-5 border-t">
                <div className="flex gap-2">
                  <Image
                    src={creatorUserData ? creatorUserData.photo : "Agregar foto default"}
                    alt={`Imagen del evento anfitrión del evento ${id}`}
                    width={80}
                    height={40}
                    className="mb-6 rounded-full shadow"
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-xl">{`${creatorUserData.firstName} ${creatorUserData.lastName}`}</h3>
                    <p className="text-[#FF256F] font-bold text-lg">
                      Anfitrión
                    </p>
                  </div>
                </div>
                <div className=" gap-4 flex flex-col text-center text-white">
                  <h2 className="text-black text-left font-bold">
                    {"Asistentes (3)"}
                  </h2>
                  <div className="flex gap-3">
                    <div className=" bg-[#1B1B1B] rounded-lg">
                      {/*Mapear datos de asistentes */}
                      <Attendee
                        img="/attendee-1.png"
                        name="Juan"
                        lastName="Almeida"
                      />
                    </div>
                    <div className=" bg-[#1B1B1B] rounded-lg">
                      <Attendee
                        img="/attendee-1.png"
                        name="Juan"
                        lastName="Almeida"
                      />
                    </div>
                    <div className=" bg-[#1B1B1B] rounded-lg">
                      <Attendee
                        img="/attendee-1.png"
                        name="Juan"
                        lastName="Almeida"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </section>
        </main>
      ) : (
        <p>Cargando datos...</p>
      )}
      <article className="p-5 flex gap-3 sticky bottom-0 border border-slate-200 bg-white shadow-lg">
        <div className='flex mx-auto w-[1400px]'>
          <AsistBar />
        </div>
      </article>
    </div>
  );
}


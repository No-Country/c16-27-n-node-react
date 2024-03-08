'use client';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';
import CardEvent from '../components/CardEvent';
import useEvents from '../hooks/useEvents';

const page = () => {
  const { allEvents, setAllEvents } = useEvents();
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return <p>Access Denied</p>;
  }

  return (
    <section className="container mx-auto flex flex-col md:flex-row  justify-between h-[100%]">
      <div className="border border-slate-200 bg-white w-full md:w-[30rem] flex flex-col justify-between items-center pt-8 pb-16 gap-10">
        <div className="w-full flex flex-col items-center">
          <Image
            src={'/profileDefaultImg.png'}
            alt="Profile Defaul Img"
            width={300}
            height={200}
            className="rounded-2xl"
          />
          <div>
            <div className='border border-slate-200 rounded-xl mt-10 w-full p-4'>
              <label className='text-xl text-[#23B0FF] font-bold'>Usuario</label>
              <h2 className="font-bold text-xl mb-5">{session.user?.name}</h2>
              <label className='text-xl text-[#23B0FF] font-bold'>Correo electrónico</label>
              <h2 className="font-bold text-xl">{session.user?.email}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-7 bg-white">
        <div>
          <h2 className="text-dodgerBlue text-3xl font-semibold mb-8">
            Eventos propios
          </h2>
          <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
            {allEvents.find(
              (event) => event.creatorUserEmail === session.user?.email
            ) ? (
              allEvents
                .filter(
                  (event) => event.creatorUserEmail === session.user?.email
                )
                .map((event) => (
                  <CardEvent
                    id={event._id}
                    img={event.image}
                    type={event.type}
                    city={event.city === "" ? "Evento en linea" : event.city}
                    key={event._id}
                    title={event.title}
                    date={event.date}
                  />
                ))
            ) : (
              <p>No tienes eventos creados</p>
            )}
          </div>
        </div>
        <div className="mt-8">
          <hr className="border-2 " />
          <h2 className="text-dodgerBlue text-3xl font-semibold mt-4 mb-8">
            Eventos a los que asistiré
          </h2>
          <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
            {allEvents.length > 0 ? (
              allEvents
                .filter(
                  (event) =>
                    event.attendees &&
                    event.attendees.includes(session.user?.email)
                )
                .map((event) => (
                  <CardEvent
                    id={event._id}
                    img={event.image}
                    type={event.type}
                    city={event.city === "" ? "Evento en linea" : event.city}
                    key={event._id}
                    title={event.title}
                    date={event.date}
                  />
                ))
            ) : (
              <p>No tienes eventos creados</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

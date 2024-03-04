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
      <div className="bg-[#D9D9D9] w-full md:w-[30rem] flex flex-col justify-between items-center pt-8 pb-16 gap-10">
        <div className="w-full flex flex-col items-center">
          <Image
            src={session.user?.image}
            alt=""
            width={250}
            height={200}
            className="rounded-2xl"
          />
          <h3 className="font-bold mt-4 text-2xl">{session.user?.name}</h3>
          <h3 className="font-bold mt-4 text-2xl">{session.user?.email}</h3>
        </div>

        <Link
          href={"#"}
          onClick={async () => {
            await signOut({
              callbackUrl: "/",
            });
          }}
        >
          <Button text="Borrar Cuenta" bgColor="crimsonRed" />
        </Link>
      </div>
      <div className="flex flex-col w-full p-8 ">
        <div className="mt-8">
          <hr className="border-2" />
          <h2 className="text-dodgerBlue text-3xl font-semibold mt-4 mb-8">
            Eventos propios
          </h2>
          <div className="flex flex-wrap gap-4">
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
          <div className="flex flex-wrap gap-4">
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

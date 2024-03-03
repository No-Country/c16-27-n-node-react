'use client';
import CardEvent from './components/CardEvent';
import Button from './ui/Button';
import Link from 'next/link';
import useEvents from './hooks/useEvents';
import { useSession } from 'next-auth/react';
import HomePageSkeleton from './ui/HomePageSkeleton';

const page = () => {
  const { allEvents } = useEvents();

  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <HomePageSkeleton />;
  }

  return (
    <main>
      <section className="bg-[#0F0F0F] flex flex-col items-center justify-center md:h-[500px] mb-10">
        <h1 className=" text-5xl text-center mb-5 mt-16 md:mt-5 text-white font-bold font-segoe">
          ¡Bienvenido a{' '}
          <span className="text-dodgerBlue font-tenada">Meet</span>
          <span className="text-radicalRed font-tenada">Hub</span>!
        </h1>
        <div className="h-56 flex items-center justify-center m-3 lg:max-w-[800px]">
          <p className="text-center w-full max-w-[50rem] text-xl md:text-2xl lg:text-3xl md:max-w-[100rem] font-normal text-white tracking-wide ">
            <span className="text-dodgerBlue">
              Tu plataforma central para conectar, crear y asistir a eventos
            </span>{' '}
            ¿Tienes una idea brillante que deseas compartir con el mundo?
            <span className="text-dodgerBlue"> Crea tu propio evento</span> en
            minutos y deja que la comunidad se una a ti! Con{' '}
            <span className="text-dodgerBlue">Meet</span>
            <span className="text-radicalRed">Hub</span>, el mundo está al
            alcance de tu mano
          </p>
        </div>
      </section>
      <div className="flex items-center justify-center">
        <Link href={'/searchPage'}>
          <Button text="¡Descubre eventos aquí!" bgColor="dodgerBlue" />
        </Link>
      </div>
      <section className="h-[100] md:h-full flex flex-col items-center justify-center md:m-5">
        <section className="">
          <section className="md:max-w-[1300px] flex flex-wrap justify-center gap-8 mt-8">
            {allEvents
              .map((event) => (
                <CardEvent
                  id={event._id}
                  img={event.image}
                  type={event.type}
                  city={event.city === '' ? 'Evento en linea' : event.city}
                  key={event._id}
                  title={event.title}
                  date={event.date}
                />
              ))
              .slice(0, 3)}
          </section>
        </section>
      </section>
    </main>
  );
};

export default page;

// <CardEvent
//   id={"2"}
//   img={"/images/imgCard-2.png"}
//   title={"Open Beer Bogotá 2024"}
//   date={"12/03/2024 - 9:00 PM (GMT-5)"}
//   location={"Bogotá, CO"}
//   type={"inperson"}
// />;

<<<<<<< HEAD
'use client';
import CardEvent from './components/CardEvent';
import Button from './ui/Button';
import Link from 'next/link';
const page = () => {
=======
"use client";
import CardEvent from "./components/CardEvent";
import Link from "next/link";
import { eventsData } from "/eventsData";

const page = () => {
  const firstThreeEvents = eventsData.slice(0, 3);

>>>>>>> 808631b524de0e7f8a107c3df4802e8c566d6fad
  return (
    <main>
      <section className="bg-[#0F0F0F] flex flex-col items-center justify-center h-[300px] mb-10">
        <h1 className=" text-5xl text-center mb-5 text-white font-bold font-segoe">
          ¡Bienvenido a <span className="text-[#23B0FF] font-tenada">Meet</span>
          <span className="text-[#FF256F] font-tenada">Hub</span>!
        </h1>
        <p className="text-center text-3xl w-[100rem] font-normal text-white tracking-wide">
          <span className="text-[#23B0FF]">
            Tu plataforma central para conectar, crear y asistir a eventos
          </span>
          <br></br>
          ¿Tienes una idea brillante que deseas compartir con el mundo?
          <br></br>¡
          <span className="text-[#23B0FF]">Crea tu propio evento</span> en
<<<<<<< HEAD
          minutos y deja que la comunidad se una a ti! <br></br> Con{' '}
          <span className="text-[#23B0FF]">Meet</span>
          <span className="text-[#FF256F]">Hub</span>, el mundo está al alcance
          de tu mano
        </p>
      </section>
      <section className="h-[600px] flex flex-col items-center justify-center gap-10 m-5">
        <Link href={'/searchPage'}>
          <Button text="¡Descubre eventos aquí!" bgColor="#23B0FF" />
        </Link>
        <section className="flex gap-8">
          <CardEvent
            img={'/images/imgCard-1.png'}
            title={'Mercados Monetarios (Forex & Monedas Digitales)'}
            date={'02/03/2024 - 7:00 PM (GMT-5)'}
            location={'Lima, PE'}
            type={'inperson'}
          />
          <CardEvent
            img={'/images/imgCard-2.png'}
            title={'Open Beer Bogotá 2024'}
            date={'12/03/2024 - 9:00 PM (GMT-5)'}
            location={'Bogotá, CO'}
            type={'inperson'}
          />
          <CardEvent
            img={'/images/imgCard-2.png'}
            title={
              'Inteligencia Artificial: una mirada desde y para la universidad'
            }
            date={'24/03/2024 - 7:00 PM (GMT-5)'}
            location={'En Línea'}
            type={'online'}
=======
          minutos y deja que la comunidad se una a ti! <br></br> Con{" "}
          <span className="text-[#23B0FF]">Meet</span>
          <span className="text-[#FF256F]">Hub</span>, el mundo está al alcance
          de tu mano.
        </p>
      </section>
      <div className="m-5 justify-center items-center flex">
        <Link href={"/searchPage"}>
          <button className="bg-[#23B0FF] h-15 rounded-[20px] text-3xl text-white p-4 font-bold tracking-wider">
            ¡Descubre eventos aquí!
          </button>
        </Link>
        </div>
      <section className="h-400px] flex flex-col items-center justify-center gap-10 m-10">
        
        <section className="flex gap-8">
          <CardEvent
            id={firstThreeEvents[0].id}
            img={firstThreeEvents[0].img}
            title={firstThreeEvents[0].title}
            date={firstThreeEvents[0].date}
            location={firstThreeEvents[0].location}
            type={firstThreeEvents[0].type}
          />
          <CardEvent
          id={firstThreeEvents[1].id}
            img={firstThreeEvents[1].img}
            title={firstThreeEvents[1].title}
            date={firstThreeEvents[1].date}
            location={firstThreeEvents[1].location}
            type={firstThreeEvents[1].type}
          />
          <CardEvent
          id={firstThreeEvents[2].id}
            img={firstThreeEvents[2].img}
            title={firstThreeEvents[2].title}
            date={firstThreeEvents[2].date}
            location={firstThreeEvents[2].location}
            type={firstThreeEvents[2].type}
>>>>>>> 808631b524de0e7f8a107c3df4802e8c566d6fad
          />
        </section>
      </section>
    </main>
  );
};

export default page;

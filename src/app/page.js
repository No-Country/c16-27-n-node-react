"use client";
import CardEvent from "./components/CardEvent";
import Link from "next/link";
import { eventsData } from "/eventsData";

const page = () => {
  const firstThreeEvents = eventsData.slice(0, 3);

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
          />
        </section>
      </section>
    </main>
  );
};

export default page;

import React from "react";
import CardEvent from "./components/CardEvent";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <section className="bg-[#1B1B1B] flex flex-col items-center justify-center h-[435px] ">
        <h1 className=" text-5xl text-center mb-5 text-white font-bold">
          ¡Bienvenido a <span className="text-[#23B0FF]">Meet</span>
          <span className="text-[#FF256F]">Hub!</span>
        </h1>
        <p className="text-center text-2xl w-[50rem] font-bold text-white">
          <span className="text-[#23B0FF]">
            Tu plataforma central para conectar, crear y asistir a eventos.
          </span>
          ¿Tienes una idea brillante que deseas compartir con el mundo?
          <span className="text-[#23B0FF]">¡Crea tu propio evento</span>en
          minutos y deja que la comunidad se una a ti! Con{" "}
          <span className="text-[#23B0FF]">Meet</span>
          <span className="text-[#FF256F]">Hub!</span>, el mundo está al alcance
          de tu mano.
        </p>
      </section>
      <section className="h-[670px] flex flex-col items-center justify-center gap-10 ">
        <Link href={'/searchPage'} >
          <button className="bg-[#23B0FF] h-20 rounded-lg text-3xl text-white p-2 font-bold">
            !Descubre eventos aqui!
          </button>
        </Link>
        <section className="flex gap-8 mt-2">
          <CardEvent
            img={"/images/imgCard-1.png"}
            title={"Mercados Monetarios (Forex & Monedas Digitales)"}
            date={"02/03/2024 - 7:00 PM (GMT-5)"}
            location={"Lima, PE"}
          />
          <CardEvent
            img={"/images/imgCard-2.png"}
            title={"Open Beer Bogotá 2024"}
            date={"12/03/2024 - 9:00 PM (GMT-5)"}
            location={"Bogotá, CO"}
          />
          <CardEvent
            img={"/images/imgCard-3.png"}
            title={"Inteligencia Artificial: una mirada desde y para la universidad"}
            date={"24/03/2024 - 7:00 PM (GMT-5)"}
            location={"En línea"}
          />
        </section>
      </section>
    </main>
  );
};

export default page;

import React from "react";
import CardEvent from "./components/CardEvent";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <section className="bg-[#0F0F0F] flex flex-col items-center justify-center h-[300px] ">
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
          <br></br>
          ¡<span className="text-[#23B0FF]">Crea tu propio evento</span> en
          minutos y deja que la comunidad se una a ti! <br></br> Con{" "}
          <span className="text-[#23B0FF]">Meet</span>
          <span className="text-[#FF256F]">Hub</span>, el mundo está al alcance
          de tu mano
        </p>
      </section>
      <section className="h-[600px] flex flex-col items-center justify-center gap-10 ">
        <Link href={'/searchPage'} >
          <button className="bg-[#23B0FF] h-15 rounded-[20px] text-3xl text-white p-4 font-bold tracking-wider">
            ¡Descubre eventos aquí!
          </button>
        </Link>
        <section className="flex gap-8">
          <CardEvent
            img={"/images/imgCard-1.png"}
            title={"Mercados Monetarios (Forex & Monedas Digitales)"}
            date={"02/03/2024 - 7:00 PM (GMT-5)"}
            location={"Lima, PE"}
            type={"inperson"}
          />
          <CardEvent
            img={"/images/imgCard-2.png"}
            title={"Open Beer Bogotá 2024"}
            date={"12/03/2024 - 9:00 PM (GMT-5)"}
            location={"Bogotá, CO"}
            type={"inperson"}
          />
          <CardEvent
            img={"/images/imgCard-3.png"}
            title={"Inteligencia Artificial: una mirada desde y para la universidad"}
            date={"24/03/2024 - 7:00 PM (GMT-5)"}
            location={"En Línea"}
            type={"online"}
          />
        </section>
      </section>
    </main>
  );
};

export default page;

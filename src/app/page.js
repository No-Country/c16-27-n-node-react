'use client';
import CardEvent from './components/CardEvent';
import Button from './ui/Button';
import Link from 'next/link';
const page = () => {
  return (
    <main>
      <section className="bg-[#0F0F0F] flex flex-col items-center justify-center h-[500px] md:h-[300px] mb-10">
        <h1 className=" text-5xl text-center mb-5 mt-5 text-white font-bold font-segoe">
          ¡Bienvenido a{" "}
          <span className="text-dodgerBlue font-tenada">Meet</span>
          <span className="text-radicalRed font-tenada">Hub</span>!
        </h1>
        <div className="h-56 flex items-center justify-center m-3 lg:max-w-[800px]">
          <p className="text-center w-full max-w-[50rem] text-xl md:text-2xl lg:text-3xl md:max-w-[100rem] font-normal text-white tracking-wide ">
            <span className="text-dodgerBlue">
              Tu plataforma central para conectar, crear y asistir a eventos
            </span>{" "}
            ¿Tienes una idea brillante que deseas compartir con el mundo?
            <span className="text-dodgerBlue"> Crea tu propio evento</span> en
            minutos y deja que la comunidad se una a ti! Con{" "}
            <span className="text-dodgerBlue">Meet</span>
            <span className="text-radicalRed">Hub</span>, el mundo está al
            alcance de tu mano
          </p>
        </div>
      </section>
      <div className='flex items-center justify-center'>
        <Link href={"/searchPage"}>
          <Button text="¡Descubre eventos aquí!" bgColor="dodgerBlue" />
        </Link>
      </div>
      <section className="h-[100] md:h-[600px] flex flex-col items-center justify-center gap-10 md:m-5">
        <section className="mt-10 md:mt-0 flex flex-col md:flex-row gap-8">
          <CardEvent
            id={"1"}
            img={"/images/imgCard-1.png"}
            title={"Mercados Monetarios (Forex & Monedas Digitales)"}
            date={"02/03/2024 - 7:00 PM (GMT-5)"}
            location={"Lima, PE"}
            type={"inperson"}
          />
          <CardEvent
            id={"2"}
            img={"/images/imgCard-2.png"}
            title={"Open Beer Bogotá 2024"}
            date={"12/03/2024 - 9:00 PM (GMT-5)"}
            location={"Bogotá, CO"}
            type={"inperson"}
          />
          <CardEvent
            id={"3"}
            img={"/images/imgCard-2.png"}
            title={
              "Inteligencia Artificial: una mirada desde y para la universidad"
            }
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

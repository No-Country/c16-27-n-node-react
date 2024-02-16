import React from 'react';
import CardWithDescription from '../components/CardWithDescription';


const page = () => {
  return (
    <main className=" flex flex-col items-center border border-red-500 h-screen  ">
      <section className=" mb-8 mt-8 w-[1600px] flex items-center gap-3 border border-black h-16">
        <select className='border border-slate-400 rounded h-8'>
          <option value="" selected >Cualquier ciudad</option>
          <option value="">Medellín, CO</option>
          <option value="">Buenos Aires, AR</option>
          <option value="">Santiago, CL</option>
        </select>
        <select className='border border-slate-400 rounded h-8' >
          <option value="" selected >Cualquier día</option>
          <option value="">Medellín, CO</option>
          <option value="">Buenos Aires, AR</option>
          <option value="">Santiago, CL</option>
        </select>
        <select className='border border-slate-400 rounded h-8'>
          <option value="" selected >Cualquier tipo</option>
          <option value="">Medellín, CO</option>
          <option value="">Buenos Aires, AR</option>
          <option value="">Santiago, CL</option>
        </select>
        <select className='border border-slate-400 rounded h-8'>
          <option value="" selected >Cualquier categoría</option>
          <option value="">Medellín, CO</option>
          <option value="">Buenos Aires, AR</option>
          <option value="">Santiago, CL</option>
        </select>
        <button className='bg-[#23B0FF] text-white font-bold rounded p-2'>Restablecer filtros</button>
      </section>
      <section className='flex flex-wrap gap-7 w-[1600px] border border-black'>
        <CardWithDescription 
          img={"/images/imgCard-1.png"}
          title={"Mercados Monetarios (Forex & Monedas Digitales)"}
          date={"02/03/2024 - 7:00 PM (GMT-5)"}
          location={"Lima, PE"}
        />
        <CardWithDescription 
          img={"/images/imgCard-1.png"}
          title={"Mercados Monetarios (Forex & Monedas Digitales)"}
          date={"02/03/2024 - 7:00 PM (GMT-5)"}
          location={"Lima, PE"}
        />
        <CardWithDescription 
          img={"/images/imgCard-1.png"}
          title={"Mercados Monetarios (Forex & Monedas Digitales)"}
          date={"02/03/2024 - 7:00 PM (GMT-5)"}
          location={"Lima, PE"}
        />
        <CardWithDescription 
          img={"/images/imgCard-1.png"}
          title={"Mercados Monetarios (Forex & Monedas Digitales)"}
          date={"02/03/2024 - 7:00 PM (GMT-5)"}
          location={"Lima, PE"}
        />
        <CardWithDescription 
          img={"/images/imgCard-1.png"}
          title={"Mercados Monetarios (Forex & Monedas Digitales)"}
          date={"02/03/2024 - 7:00 PM (GMT-5)"}
          location={"Lima, PE"}
        />
        <CardWithDescription 
          img={"/images/imgCard-1.png"}
          title={"Mercados Monetarios (Forex & Monedas Digitales)"}
          date={"02/03/2024 - 7:00 PM (GMT-5)"}
          location={"Lima, PE"}
        />
      </section>
    </main>
  );
};

export default page;
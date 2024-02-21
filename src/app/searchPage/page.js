'use client'
import  React from 'react';
import CardWithDescription from '../components/CardWithDescription';
import { eventsData } from '../../../eventsData';
import Link from 'next/link';
import { useState } from 'react';

const page = () => {


  return (
    <main className=" flex flex-col items-center">
      <section className=" mb-8 mt-8 w-[1400px] flex items-center gap-3 h-16">
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
      <section className='flex flex-wrap w-[1400px] justify-between'>
        {eventsData.map((event, index) => (
          <Link href={`/event/${event.id}`}  className='cursor-pointer'>
            <CardWithDescription
              key={event.id}
              img={event.img}
              title={event.title}
              date={event.date}
              location={event.type}
              description={event.description}
            />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default page;
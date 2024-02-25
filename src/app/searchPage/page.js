'use client'
import  React from 'react';
import { useState } from 'react';
import CardWithDescription from '../components/CardWithDescription';
import { eventsData } from '../../../eventsData';
import Link from 'next/link';
import EventFilters from '../components/EventFilters';


const page = () => {

  const [allEvents, setAllEvents] = useState(eventsData);
  
  return (
    <main className="flex flex-col items-center">
      <section className="p-2 mb-3 mt-8 w-[1400px] flex items-center gap-3 h-16">
        <EventFilters eventsData={eventsData} setAllEvents={setAllEvents} />
      </section>
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {allEvents.map((event, index) => (
          <Link
            key={event.id}
            href={`/event/${event.id}`}
            className="cursor-pointer"
          >
            <CardWithDescription
              key={event.id}
              img={event.img}
              title={event.title}
              date={event.date}
              type={event.type}
              city={event.city}
              description={event.description}
            />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default page;
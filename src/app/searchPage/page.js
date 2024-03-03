'use client';
import useEvents from '../hooks/useEvents';
import CardWithDescription from '../components/CardWithDescription';
import Link from 'next/link';
import EventFilters from '../components/EventFilters';
import { useSession } from 'next-auth/react';
import SearchPageSkeleton from '../ui/SearchPageSkeleton';

const page = () => {
  const { allEvents, setAllEvents, loading } = useEvents();

  const { data: status } = useSession();
  if (status === 'loading') {
    return <SearchPageSkeleton />;
  }

  // if (status === 'unauthenticated') {
  //   return <p>Access Denied</p>;
  // }

  return (
    <main className="flex flex-col items-center">
      <section className="p-2 mb-3 mt-8 w-full xl:w-[1400px] flex items-center gap-3 flex-wrap md:h-16">
        <EventFilters setAllEvents={setAllEvents} />
      </section>
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {allEvents.map((event, index) => (
          <Link
            key={event._id}
            href={`/event/${event._id}`}
            className="cursor-pointer"
          >
            <CardWithDescription
              key={event._id}
              image={event.image}
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

"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import CardWithDescription from "../components/CardWithDescription";
import { eventsData } from "/eventsData";
import Link from "next/link";
import EventFilters from "../components/EventFilters";
import { useSession } from "next-auth/react";
import SearchPageSkeleton from "../ui/SearchPageSkeleton";

const page = () => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/events")
      .then((response) => response.json())
      .then((data) => setAllEvents(data))
      .catch((error) => console.log("Error:", error));
  }, []);

  const { data: session, status } = useSession();
  if (status === "loading") {
    return <SearchPageSkeleton />;
  }

  // if (status === 'unauthenticated') {
  //   return <p>Access Denied</p>;
  // }

  return (
    <main className="flex flex-col items-center">
      <section className="p-2 mb-3 mt-8 w-full xl:w-[1400px] flex items-center gap-3 flex-wrap md:h-16">
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

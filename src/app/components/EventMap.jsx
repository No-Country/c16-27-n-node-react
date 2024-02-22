import React from 'react';


const EventMap = ({ eventData }) => {
  return (
    <>
      <article className="p-3">
        <h2 className="text-[#23B0FF] font-bold text-xl">
          {eventData.address}
        </h2>
      </article>
      <article className=" h-[350px] rounded-lg p-3">
        {eventData.type === "Presencial" ? (
          <iframe
            width="400"
            height="320"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${eventData.address}`}
          ></iframe>
        ) : (
          <p>Evento en línea</p>
        )}
      </article>
    </>
  );
};

export default EventMap;
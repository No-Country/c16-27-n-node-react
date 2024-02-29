import React from 'react';


const EventFormMap = ({ address }) => {
  return (
    <article className="h-[350px] rounded-lg md:p-3 md:mt-2 w-full relative">
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${address}`}
        className="rounded-lg absolute top-0 left-0 w-full h-full"
      ></iframe>
    </article>
  );
};

export default EventFormMap;
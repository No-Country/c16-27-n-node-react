import React from 'react';


const EventFormMap = ({ address }) => {
  return (
    <article className=" h-[350px] rounded-lg p-3 mt-2">
      <iframe
        width="500"
        height="350"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${address}`}
        className='rounded-lg'
      ></iframe>
    </article>
  );
};

export default EventFormMap;
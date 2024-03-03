import React from 'react';
import Image from 'next/image';

const CardEventView = ({ title, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Image
        src={image}
        alt="card image"
        width={280}
        height={300}
        className="rounded-lg"
      />
    </div>
  );
};

export default CardEventView;
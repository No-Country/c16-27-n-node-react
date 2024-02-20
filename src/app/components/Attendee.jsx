import React from 'react';

const Attendee = ( {img, name, lastName} ) => {
  return (
    <div>
      <img src={img} alt={`Imagen de ${name} ${lastName}`} />
      <h1>{name}</h1>
      <h2>{lastName}</h2>
    </div>
  );
};

export default Attendee;
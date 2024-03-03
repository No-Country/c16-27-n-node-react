import React from 'react';

const Attendee = ( {image, name} ) => {
  return (
    <div>
      <div className='w-30 h-30'>
      <img src={image} alt={`Imagen de ${name}`} width={100} height={100}/>
      </div>
      <h1>{name}</h1>
    </div>
  );
};

export default Attendee;
import React from 'react';

const Attendee = ({ image, name }) => {
  
  const nameParts = name.split(' ');
  const firstName = nameParts[0];
  const firstLastName = nameParts.length > 1 ? nameParts[1] : '';

  return (
    <div className='flex flex-col items-center'>
      <div>
        <img
          src={image}
          alt={`Imagen de ${name}`}
          width={140}
          className="rounded-t-xl"
        />
      </div>
      <div className=" rounded-b-xl bg-[#0F0F0F] max-w-36 w-full h-14 sm:h-14 lg:h-14 overflow-y-hidden flex justify-center items-center">
        <h1 className="leading-5 font-bold">{`${firstName} ${firstLastName}`}</h1>
      </div>
    </div>
  );
};

export default Attendee;

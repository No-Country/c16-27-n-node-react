import React from 'react';
import Image from 'next/image';

const AsistBar = () => {
  return (
    <div className="flex gap-4">
      <div className="flex items-center justify-center gap-3 bg-dodgerBlue p-2 rounded-2xl text-white text-xl md:text-2xl font-bold h-16 w-40 md:w-48">
        <button>Compartir</button>
        <Image
          src={'/shareLogo.svg'}
          alt={`icono de compartir evento`}
          width={30}
          height={40}
        />
      </div>
      <div className="flex items-center justify-center gap-3 bg-Shamrock p-2 rounded-2xl text-white text-xl md:text-2xl font-bold h-16 w-40 md:w-48">
        <button>Asistir</button>
        <Image
          src={'/userAdd.svg'}
          alt={`icono de compartir evento`}
          width={30}
          height={40}
        />
      </div>
    </div>
  );
};

export default AsistBar;

import React from 'react';
import Image from 'next/image';

const NabBar = () => {
  return (
    <div className='border-b-2 flex justify-between p-1 '>
      <div className='flex items-center'>
        <Image 
          src='/meethub-logo.png' 
          alt='navbar-logo' 
          width={70} 
          height={60}
          className='mr-5' 
        />
        <div className='flex items-center border rounded-lg h-12'>
          <Image 
            src='/searchIcon.svg' 
            alt='searchIcon' 
            width={20} 
            height={20} 
            className='ml-3'
          />
          <div className='flex divide-x'>
            <input 
              type='text' 
              placeholder='Buscar eventos...' 
              className='border-none bg-transparent focus:outline-none ml-2' 
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between w-32'>
        <button>
          <Image 
            src='/switchToDark.png' 
            alt='switchToDark' 
            width={50} 
            height={50} 
          />
        </button>
        <Image 
          src='/loginLogo.svg' 
          alt='logo' 
          width={60} 
          height={60} 
        />
      </div>
    </div>
  );
};

export default NabBar;
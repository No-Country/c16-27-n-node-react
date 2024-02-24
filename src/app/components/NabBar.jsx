import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import BtnLogoLink from '../ui/BtnLogoLink';


const NabBar = () => {

  const createEventModal = () => {
    console.log('Create Event Modal open');
  }

  return (
    <div className='border-b-2 p-4 flex justify-between bg-white'>
      <div className='flex items-center'>
        <Link href={'/'} >
          <Image 
            src='/MeetHub-Logo.svg' 
            alt='navbar-logo' 
            width={60}
            height={50}
            className='mr-5' 
          />
        </Link>
        <div className='flex items-center border rounded-lg h-11'>
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
              className='border-none bg-transparent focus:outline-none ml-3' 
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between w-36 gap-3'>
        <BtnLogoLink 
          src='/circle-half.svg' 
          alt='darkThemeIcon' 
          width={40} 
          height={30} 
        />
        <BtnLogoLink 
          src='/calendar-plus.svg' 
          alt='calendarIcon' 
          width={40} 
          height={30} 
          onclick={createEventModal}
        />
        <BtnLogoLink 
          src='/login-icon.svg' 
          alt='loginIcon' 
          width={40} 
          height={30} 
        />
      </div>
    </div>
  );
};

export default NabBar;
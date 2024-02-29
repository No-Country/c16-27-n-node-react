'use client';
import Image from 'next/image';
import Link from 'next/link';
import BtnLogoLink from '../ui/BtnLogoLink';
import Avatar from '../ui/Avatar';
import BtnCalendarIcon from './BtnCalendarIcon';
import { useState } from 'react';

const NabBar = () => {

  const [isNabBarOpen, setIsNabBarOpen] = useState(false);
  const handleNabBar = () => {
    setIsNabBarOpen(!isNabBarOpen);
    console.log(isNabBarOpen)
  }

  return (
    <div className="border-b-2 p-2 flex justify-between bg-white">
      <div className="flex items-center">
        <div>
          {isNabBarOpen && (
            <div className=" animate-fade animate-duration-200 flex flex-col absolute top-16 right-0 items-center bg-white border-b-2">
             <ul className='bg-white text-2xl flex flex-col m-3 gap-6'>
                <li>
                  <Link href={"/searchPage"}>Inicio</Link>
                </li>
                <li>
                  <Link href={"/searchPage"}>Eventos</Link>
                </li>
                <li>
                  <Link href={"/searchPage"}>Nosotros</Link>
                </li>
                <li>
                  <div className='border flex items-center justify-center gap-10'>
                    <Avatar />
                    <BtnCalendarIcon />
                  </div>
                </li>
             </ul>
            </div>
          )}
        </div>
        <Link href={"/"}>
          <Image
            src={"/MeetHub-Logo.svg"}
            alt="navbar-logo"
            width={60}
            height={50}
            className="hidden md:block mr-7 md:mr-5"
          />
        </Link>
        <div className="flex items-center border rounded-lg h-11">
          <Image
            src="/searchIcon.svg"
            alt="searchIcon"
            width={20}
            height={20}
            className="ml-3"
          />
          <div className="flex divide-x">
            <input
              type="text"
              placeholder="Buscar eventos..."
              className="border-none bg-transparent focus:outline-none ml-3"
            />
          </div>
        </div>
        <Image
          src={"/hamburguerIcon.svg"}
          alt="navbar-logo"
          width={60}
          height={50}
          className="block absolute right-0 md:hidden md:mr-5"
          onClick={handleNabBar}
        />
        <div className=" hidden md:block md:mx-5">
          <Link
            href={"/searchPage"}
            className="p-2 text-[#808080] font-bold text-2xl hover:text-[#23B0FF]"
          >
            EVENTOS
          </Link>
        </div>
      </div>
      <div className="hidden md:flex justify-between w-36 gap-3 items-center">
        <BtnLogoLink
          src={"/circle-half.svg"}
          alt="darkThemeIcon"
          width={40}
          height={30}
        />
        <BtnCalendarIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default NabBar;

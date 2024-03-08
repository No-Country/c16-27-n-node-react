'use client';
import Image from 'next/image';
import Link from 'next/link';
import BtnLogoLink from '../ui/BtnLogoLink';
import Avatar from '../ui/Avatar';
import BtnCalendarIcon from './BtnCalendarIcon';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

const NabBar = () => {

  const [isNabBarOpen, setIsNabBarOpen] = useState(false);
  const { data: session } = useSession();

  const handleNabBar = () => {
    setIsNabBarOpen(!isNabBarOpen);
  }

  return (
    <div className=" h-16 border-b-2 p-2 flex justify-between bg-white">
      <div className="flex items-center">
        <div>
          {isNabBarOpen && (
            <div className=" md:hidden z-40 animate-fade animate-duration-200 flex flex-col absolute top-16 right-0 items-center bg-white border-b-2">
             <ul className='bg-white text-2xl flex flex-col m-3 gap-6'>
                <li onClick={() => setIsNabBarOpen(false)}>
                  <Link href={"/"}>Inicio</Link>
                </li>
                <li onClick={() => setIsNabBarOpen(false)}>
                  <Link href={"/searchPage"}>Eventos</Link>
                </li>
                <li onClick={() => setIsNabBarOpen(false)}>
                  <Link href={"/teams"}>Nosotros</Link>
                </li>
                <li>
                  <div className='flex items-center justify-center gap-10'>
                    <Avatar />
                    <BtnCalendarIcon 
                       setIsNabBarOpen={setIsNabBarOpen}
                    />
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
        <div className=" hidden md:block md:mx-5">
          <Link
            href={"/teams"}
            className="p-2 text-[#808080] font-bold text-2xl hover:text-[#23B0FF]"
          >
            NOSOTROS
          </Link>
        </div>
      </div>
      <div className="hidden md:flex justify-between w-37 gap-3 items-center" >
        {/* <BtnLogoLink
          src={"/circle-half.svg"}
          alt="darkThemeIcon"
          width={40}
          height={30}
        /> */}
        {session ? (<BtnCalendarIcon 
          setIsNabBarOpen={setIsNabBarOpen}
        />) : ("") }
        <Avatar />
      </div>
    </div>
  );
};

export default NabBar;

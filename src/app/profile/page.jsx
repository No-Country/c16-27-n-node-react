'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';
import CardEvent from '../components/CardEvent';

const page = () => {
  const { data: session } = useSession();

  return (
    <section className="container mx-auto flex justify-between h-[100%]">
      <div className="bg-[#D9D9D9] w-96  flex flex-col justify-between items-center pt-8 pb-16">
        {session?.user ? (
          <div className="">
            <Image
              src={session.user?.image}
              alt=""
              width={250}
              height={200}
              className="aspect-square rounded-2xl"
            />
          </div>
        ) : (
          <p>Inicie session o cree una cuenta </p>
        )}
        <Button text="Borrar Cuenta" bgColor="#F40606" />
      </div>
      {/* <div className="h-screen w-96 bg-[#D9D9D9]">
        <Image src="login-icon.svg" alt="" width={40} height={60} />
      </div> */}
      <div className="flex flex-col w-full p-8 ">
        <div className="flex flex-col gap-6">
          <label htmlFor="" className="flex flex-col font-semibold text-2xl">
            Nombre de Usuario
            <input
              type="text"
              name=""
              id=""
              className="text-xl font-normal p-2 border-black border-[1px] w-96"
            />
          </label>
          <label htmlFor="" className="flex flex-col font-semibold text-2xl">
            Contraseña
            <input
              type="text"
              name=""
              id=""
              className="text-xl font-normal p-2 border-black border-[1px] w-96"
            />
          </label>
        </div>
        <div className="mt-8">
          <hr className="border-2" />
          <h2 className="text-[#23B0FF] text-3xl font-semibold mt-4 mb-8">
            Eventos propios
          </h2>
          <div className="flex flex-wrap gap-4">
            <CardEvent
              img={'/images/imgCard-2.png'}
              title={'Open Beer Bogotá 2024'}
              date={'12/03/2024 - 9:00 PM (GMT-5)'}
              location={'Bogotá, CO'}
              type={'inperson'}
            />
            <CardEvent
              img={'/images/imgCard-2.png'}
              title={'Open Beer Bogotá 2024'}
              date={'12/03/2024 - 9:00 PM (GMT-5)'}
              location={'Bogotá, CO'}
              type={'inperson'}
            />
            <CardEvent
              img={'/images/imgCard-2.png'}
              title={'Open Beer Bogotá 2024'}
              date={'12/03/2024 - 9:00 PM (GMT-5)'}
              location={'Bogotá, CO'}
              type={'inperson'}
            />
          </div>
        </div>
        <div className="mt-8">
          <hr className="border-2 " />
          <h2 className="text-[#23B0FF] text-3xl font-semibold mt-4 mb-8">
            Eventos a los que asistiré
          </h2>
          <div className="flex flex-wrap gap-4">
            <CardEvent
              img={'/images/imgCard-2.png'}
              title={'Open Beer Bogotá 2024'}
              date={'12/03/2024 - 9:00 PM (GMT-5)'}
              location={'Bogotá, CO'}
              type={'inperson'}
            />
            <CardEvent
              img={'/images/imgCard-2.png'}
              title={'Open Beer Bogotá 2024'}
              date={'12/03/2024 - 9:00 PM (GMT-5)'}
              location={'Bogotá, CO'}
              type={'inperson'}
            />
            <CardEvent
              img={'/images/imgCard-2.png'}
              title={'Open Beer Bogotá 2024'}
              date={'12/03/2024 - 9:00 PM (GMT-5)'}
              location={'Bogotá, CO'}
              type={'inperson'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

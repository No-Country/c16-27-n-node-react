'use client'
import React from 'react';
import Image from 'next/image';
import EventFormMap from '@/app/components/EventFormMap';
import { useState } from 'react';

const PresencialForm = () => {

  const [address, setAddress] = useState('')

  return (
    <form action="/ruta/del/endpoint" method="POST" className="flex flex-col justify-between">
      <section className='flex w-full text-lg p-3 h-[60rem]'>
        <div className="flex flex-col w-1/2 p-4 border-r">
          <div className="h-1/2 flex flex-col gap-2">
            <label htmlFor="">Título</label>
            <input type="text" className="border rounded-md" />
            <label htmlFor="">Categoría</label>
            <select name="" id="" className="border rounded-md"></select>
            <label htmlFor="">Fecha</label>
            <input type="date" className="border rounded-md" />
            <label htmlFor="">Hora</label>
            <input type="time" className="border rounded-md" />
            <label htmlFor="">Zona Horaria</label>
            <select name="" id="" className="border rounded-md"></select>
          </div>
          <label htmlFor="">Descripción</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="border h-1/2 p-5"
          ></textarea>
        </div>
        <div className="flex flex-col border-l w-1/2 p-4 justify-between">
          <div className="h-1/2 flex flex-col gap-2">
            <label htmlFor="">Ciudad</label>
            <select name="" id="" className="border rounded-md"></select>
            <label htmlFor="">Dirección</label>
            <input 
              type="text" 
              className="border rounded-md"
              placeholder='Buscar dirección en el mapa'
              value={address} 
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="h-full flex items-center justify-center">
             <EventFormMap address={address || '15.5126501,-80.5271313,3'} />
            </div>
          </div>
          <div className="border h-2/5 bg-[#C4C4C4] flex items-center justify-center rounded-lg">
            <label htmlFor="fileInput" className="cursor-pointer">
              <Image
                src={"/camera-fill.svg"}
                alt="icono de la cámara"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <input
                type="file"
                id="fileInput"
                className="w-0 h-0 overflow-hidden"
              />
            </label>
          </div>
        </div>
      </section>
      <section className='flex h-[91px] text-xl font-bold'>
        <button className="bg-[#25CC68] text-white rounded-3xl w-40 m-5" type='submit'>
          Confirmar
        </button>
        <button className="bg-[#23B0FF] text-white rounded-3xl w-40 m-5" type='button'>
          Cancelar
        </button>
      </section>
    </form>
  );
};

export default PresencialForm;
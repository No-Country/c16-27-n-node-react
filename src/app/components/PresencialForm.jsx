"use client";
import React from "react";
import Image from "next/image";
import EventFormMap from "@/app/components/EventFormMap";
import { useState } from "react";
import { categories } from "/categoriesData";
import { timezones } from "/timezones";
import PlaceAutocomplete from "./PlaceAutocomplete";

const PresencialForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [city, setCity] = useState(""); // [1
  const [address, setAddress] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [showSelectCategory, setShowSelectCategory] = useState(true);

  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value);
    setShowSelectCategory(false);
  }; 

  
  return (
    <form
      action="http://localhost:4000/api/events"
      method="POST"
      className="flex flex-col justify-between"
    >
      <section className="flex flex-col md:flex-row w-full text-lg p-3 md:h-[60rem]">
        <div className="flex flex-col w-full md:w-1/2 p-4 md:border-r">
          <div className="h-1/2 flex flex-col gap-2">
            <label htmlFor="">Título</label>
            <input type="text" className="border rounded-md" />
            <label htmlFor="">Categoría</label>
            <select
              name=""
              id=""
              className="border rounded-md"
              value={selectedCategory}
              onChange={handleChangeCategory}
            >
              {showSelectCategory && (
                <option disabled value="">
                  Seleccionar categoría
                </option>
              )}
              {categories.map((category, index) => (
                <option key={index} value={category.value}>
                  {category.name}
                </option>
              ))}
            </select>
            <label htmlFor="">Fecha</label>
            <input type="date" className="border rounded-md" />
            <label htmlFor="">Hora</label>
            <input type="time" className="border rounded-md" />
            <label htmlFor="">Zona Horaria</label>
            <select
              name=""
              id=""
              className="border rounded-md"
              value={selectedTimezone}
              onChange={(e) => setSelectedTimezone(e.target.value)}
            >
              {timezones.map((timezone, index) => (
                <option key={index} value={timezone}>
                  {timezone}
                </option>
              ))}
            </select>
          </div>
          <div className='flex flex-col md:flex-none mt-4 md:h-full'>
            <label htmlFor="">Descripción</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border h-28 md:h-1/2 p-5"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col md:border-l md:w-1/2 p-4">
          <div className="h-1/2 flex flex-col gap-2">
            <label htmlFor="">Ciudad</label>
            <PlaceAutocomplete 
              city={city}
              setCity={setCity}
            />
            <label htmlFor="">Dirección</label>
            <input
              type="text"
              className="border rounded-md"
              placeholder="Buscar dirección en el mapa"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="h-full flex items-center justify-center md:mt-0 md:mb-0 mb-8 mt-5">
              <EventFormMap address={address || "15.5126501,-80.5271313,3"} />
            </div>
          </div>
          <div className=" md:mt-24 border bg-[#C4C4C4] flex items-center justify-center rounded-lg h-38">
              <label htmlFor="fileInput" className="cursor-pointer">
                <Image
                  src={"/camera-fill.svg"}
                  alt="icono de la cámara"
                  width={300}
                  height={300}
                  className="rounded-lg w-28 md:w-64 mt-4"
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
      <section className="flex h-[91px] text-xl font-bold">
        <button
          className="bg-Shamrock text-white rounded-3xl w-40 m-5"
          type="submit"
        >
          Confirmar
        </button>
        <button
          className="bg-dodgerBlue text-white rounded-3xl w-40 m-5"
          type="button"
        >
          Cancelar
        </button>
      </section>
    </form>
  );
};

export default PresencialForm;

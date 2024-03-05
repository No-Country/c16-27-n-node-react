"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Attendee from "@/app/components/Attendee";
import EventMap from "@/app/components/EventMap";
import CalendarDate from "@/app/components/CalendarDate";
import AsistBar from "@/app/components/AsistBar";
import { categories } from "/categoriesData";

export default function Event({ params }) {
  const { id } = params;
  const [eventData, setEventData] = useState([]);
  const [creatorUserData, setCreatorUserData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [attendees, setAttendees] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    fetch("https://apimeethubbackend.onrender.com/api/events")
      .then((response) => response.json())
      .then((data) => {
        const selectedEvent = data.find((event) => event._id === id);
        if (selectedEvent) {
          setEventData(selectedEvent);
          const category = categories.find(
            (category) => category.value === selectedEvent.category
          );
          setCategoryName(category ? category.name : "Categoría desconocida");

          const creatorUser = usersData.find(
            (user) => user.email === selectedEvent.creatorUserEmail
          );
          if (creatorUser) {
            setCreatorUserData(creatorUser);
          }

          const attendeesData = selectedEvent.attendees.map((attendeeEmail) =>
            usersData.find((user) => user.email === attendeeEmail)
          );
          setAttendees(attendeesData.filter(Boolean));
        } else {
          console.error(`Evento con ID ${id} no encontrado.`);
        }
      })
      .catch((error) => {
        console.error("Error al obtener la información de los eventos:", error);
      });
  }, [id, usersData]);

  useEffect(() => {
    fetch("https://apimeethubbackend.onrender.com/api/user")
      .then((response) => response.json())
      .then((data) => setUsersData(data))
      .catch((error) => {
        console.error(
          "Error al obtener la información de los usuarios:",
          error
        );
      });
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen p-3">
      {eventData ? (
        <main className=" md:mt-8 flex flex-col border border-slate-200 bg-white shadow-lg rounded-lg max-w-[1400px] md:mx-auto">
          <section className="border-b p-5">
            <h1 className="text-[2rem] font-bold">{eventData.title}</h1>
            <button className="bg-dodgerBlue text-white p-1 rounded-xl">
              {categoryName}
            </button>
          </section>
          <section className="md:flex flex-col md:flex-row">
            <section className="md:w-3/6 xl:w-4/6">
              <article className="relative md:flex">
                <Image
                  src={eventData.image}
                  alt={`Imagen del evento ${id}`}
                  width={1000}
                  height={1000}
                  className="md:h-[500px] object-cover p-4"
                />
              </article>
              <article className="text-xl mt-4 md:mt-8 p-4 h-52 overflow-y-scroll">
                <p>{eventData.description || "No hay descripción"}</p>
              </article>
            </section>
            <section className="flex flex-col md:w-3/6 xl:w-2/6 p-1 mt-8 md:mt-0 md:p-5">
              <article className="flex flex-col justify-center gap-3 h-28 p-3">
                <article className="flex gap-3">
                  <CalendarDate eventData={eventData} />
                </article>
                <article className="flex gap-3">
                  {eventData.type === "online" ? (
                    <Image
                      src="/webicon.svg"
                      alt="card image"
                      width={30}
                      height={20}
                      className="mr-1"
                    />
                  ) : (
                    <Image
                      src="/locationLogo.svg"
                      alt="card image"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                  )}
                  <h1
                    className={`text-2xl font-bold text-dodgerBlue ${
                      eventData.type === "online" ? "text-Shamrock" : ""
                    }`}
                  >
                    {eventData.city === "" ? "En línea" : eventData.city}
                  </h1>
                </article>
              </article>
              <article className="rounded-lg border-t">
                <EventMap eventData={eventData} />
              </article>
              <article className="p-5 border-t mt-10 md:mt-0">
                {/* Chicos, aquí no puedo hacer que la foto venga dentro de un círculo, ya lo inenté de mil formas. Solo sirve con imágenes cuadradas */}
                <div className="flex gap-2">
                  <div className="h-30 w-30 overflow-hidden rounded-full shadow">
                    <Image
                      src={
                        creatorUserData
                          ? creatorUserData.image
                          : "Agregar foto default"
                      }
                      alt={`Imagen del evento anfitrión del evento ${id}`}
                      width={100}
                      height={100}
                      className=""
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-xl">
                      {creatorUserData.name}
                    </h3>
                    <p className="text-radicalRed font-bold text-lg">
                      Anfitrión
                    </p>
                  </div>
                </div>
                <div className=" gap-2 flex flex-col text-center text-white mt-5">
                  <h2 className="text-black text-left font-bold">
                    {"Asistentes (" + attendees.length + ")"}
                  </h2>
                  <div className="flex gap-3 justify-center">
                    {attendees.map((attendee) => (
                      <div
                        className="w-50 h-50 bg-[#1B1B1B] rounded-lg overflow-hidden"
                        key={attendee.email}
                      >
                        <Attendee image={attendee.image} name={attendee.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </section>
          </section>
        </main>
      ) : (
        <p>Cargando datos...</p>
      )}
      <article className="p-5 flex gap-3 sticky bottom-0 border border-slate-200 bg-white shadow-lg">
        <div className="flex mx-auto w-[1400px]">
          <AsistBar />
        </div>
      </article>
    </div>
  );
}

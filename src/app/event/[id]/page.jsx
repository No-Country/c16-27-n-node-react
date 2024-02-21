'use client'
import { useEffect, useState } from 'react';
import { eventsData } from '/eventsData';
import Image from 'next/image';
import Attendee from '@/app/components/Attendee';
import MainButton from '@/app/ui/mainButton';

export default function Event({ params }) {
  const { id } = params;
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const selectedEvent = eventsData.find(event => event.id === id);
    if (selectedEvent) {
      setEventData(selectedEvent);
    } else {
      console.error(`Evento con ID ${id} no encontrado.`);
    }
  }, [id]);

  return (
    <div>
      {eventData ? (
        <main className='flex flex-col border border-slate-200 bg-white shadow-lg rounded-lg'>
          <section className='border p-5'>
            <h1 className='text-[2rem] font-bold'>{eventData.title}</h1>
            <button className='bg-[#23B0FF] text-white p-1 rounded-xl'>Categoría</button>
          </section>
          <section className='flex'>
            <section className='w-4/6'>
              <article class='relative'>
                <Image
                  src={eventData.img}
                  alt={`Imagen del evento ${id}`}
                  width={280}
                  height={300}
                  className='w-full h-[500px] object-cover'
                />
              </article>
              <article className='text-xl mt-8 p-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci lorem, sodales vulputate purus sit amet, tincidunt vestibulum tortor. 
                  Donec ac dolor id mauris sagittis sollicitudin. Morbi mollis velit quis odio maximus, eget posuere urna lobortis. Vivamus aliquet volutpat nibh, 
                  nec malesuada justo dapibus eu. Vivamus at laoreet nulla, ac egestas mauris. Praesent scelerisque diam tincidunt tortor consectetur malesuada. Aliquam erat 
                  volutpat. Morbi placerat convallis diam. Phasellus aliquet pellentesque est. Praesent porta eget ipsum sed aliquet. Quisque semper vel dolor interdum hendrerit. 
                  Nunc quis sem tincidunt, tincidunt magna quis, elementum ante.
                </p>
                <p>
                  Praesent porta eget ipsum sed aliquet. Quisque semper vel dolor interdum hendrerit. 
                  Nunc quis sem tincidunt, tincidunt magna quis, elementum ante.
                </p>
              </article>
              <article className='p-5 flex gap-3 '>
                <button className='bg-[#25CC68] p-2 rounded-lg text-white text-xl w-32'>
                  Asistiré
                </button>
                <button className='bg-[#23B0FF] p-2 rounded-lg text-white text-xl w-32'>
                  Compartir
                </button>
              </article>
            </section>
            <section className='flex flex-col justify-between w-2/6 p-4 border border-slate-200'>
              <article className='flex gap-3'>
                <Image
                  src={'/calendarIcon.svg'}
                  alt={`calentarIcon del evento`}
                  width={30}
                  height={30}
                />
                <h1 className='text-[#FF256F] text-2xl font-bold'>{eventData.date}</h1>
              </article>
              <article className='flex gap-3'>
                <Image
                  src={'/locationLogo.svg'}
                  alt={`calentarIcon del evento`}
                  width={30}
                  height={30}
                />
                <h1 className='text-[#23B0FF] text-2xl font-bold'>{eventData.type}</h1>
              </article>
              <article className='rounded-lg border-t'>
                <article className='p-2'>
                  <h2 className='text-[#23B0FF] font-bold text-xl'>{eventData.address}</h2>
                </article>
                <article className=' h-[350px] rounded-lg p-5'>
                  <Image
                    src={'/mapsImage.png'}
                    alt={`Imagen del evento ${id}`}
                    width={250}
                    height={250}
                    className='w-full h-full object-cover rounded-lg shadow-lg'
                  />
                </article>
              </article>
              <article className='p-5 border-t'>
                <div className='flex gap-2'>
                  <Image
                    src={'/anfitrion.png'}
                    alt={`Imagen del evento anfitrión del evento ${id}`}
                    width={80}
                    height={40}
                    className='mb-6'
                  />
                  <div className='flex flex-col justify-center'>
                    <h3 className='font-bold text-xl'>Samuel Almeida</h3>
                    <p className='text-[#FF256F] font-bold text-lg'>Anfitrión</p>
                  </div>
                </div>
                <div className=' gap-4 flex flex-col text-center text-white'>
                  <h2 className='text-black text-left font-bold'>{'Asistentes (3)'}</h2>
                  <div className='flex gap-3'>
                    <div className=' bg-[#1B1B1B] rounded-lg'>
                      {/*Mapear datos de asistentes */}
                      <Attendee 
                        img='/attendee-1.png'
                        name='Juan'
                        lastName='Almeida'
                      />
                    </div>
                    <div className=' bg-[#1B1B1B] rounded-lg'>
                      <Attendee 
                        img='/attendee-1.png'
                        name='Juan'
                        lastName='Almeida'
                      />
                    </div>
                    <div className=' bg-[#1B1B1B] rounded-lg'>
                      <Attendee 
                        img='/attendee-1.png'
                        name='Juan'
                        lastName='Almeida'
                      />
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </section>
        </main>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

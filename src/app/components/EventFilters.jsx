import React from 'react';
import { useEffect, useState } from 'react';
import { eventsData } from '../../../eventsData';

const EventFilters = ({ setAllEvents }) => {

  const [selectedFilter, setSelectedFilter] = useState('');
  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  }

  useEffect(() => {
    if (selectedFilter) {
      // Hacer un fetch para llamar a los datos reales
      const filteredEvents = eventsData.filter(event => event.type === selectedFilter);
      setAllEvents(filteredEvents);
    } else {
      setAllEvents(eventsData);
    }
  }, [selectedFilter, eventsData]); 

  return (
    <>
     <select 
          className="border border-slate-400 rounded h-8" 
          onChange={handleFilterChange}
        >
          <option value="Cualquier Tipo" selected>Cualquier Tipo</option>
          <option value="Presencial">Presencial</option>
          <option value="Online">Online</option>
        </select>
        <button onClick={() => setAllEvents(eventsData)} className="bg-[#23B0FF] text-white font-bold rounded p-2">
          Restablecer filtros
        </button>
    </>
  );
};

export default EventFilters;
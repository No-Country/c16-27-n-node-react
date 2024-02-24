import React from 'react';
import { useEffect, useState } from 'react';
import { eventsData } from '../../../eventsData';

const EventFilters = ({ setAllEvents }) => {

  const [selectedFilter, setSelectedFilter] = useState('Cualquier Tipo');

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  }

  const resetFilters = () => {
    setAllEvents(eventsData);
    setSelectedFilter('Cualquier Tipo');
  }

  useEffect(() => {
    if (selectedFilter === 'Cualquier Tipo') {
      setAllEvents(eventsData);
    } else {
      const filteredEvents = eventsData.filter(event => event.type === selectedFilter);
      setAllEvents(filteredEvents);
    }
  }, [selectedFilter, eventsData, setAllEvents]);

  return (
    <>
      <select
        className="border border-slate-400 rounded h-8"
        onChange={handleFilterChange}
        value={selectedFilter}
      >
        <option value="Cualquier Tipo">Cualquier Tipo</option>
        <option value="Presencial">Presencial</option>
        <option value="Online">Online</option>
      </select>
      <button
        onClick={resetFilters}
        className="bg-[#23B0FF] text-white font-bold rounded p-2"
      >
        Restablecer filtros
      </button>
    </>
  );
};

export default EventFilters;
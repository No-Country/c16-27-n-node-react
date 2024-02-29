import React from 'react';
import { useEffect, useState } from 'react';
import { eventsData } from '../../../eventsData';

const EventFilters = ({ setAllEvents }) => {

  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  }

  const resetFilters = () => {
    setAllEvents(eventsData);
    setSelectedFilter('all');
  }

  useEffect(() => {
    if (selectedFilter === 'all') {
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
        <option value="all">Cualquier Tipo</option>
        <option value="in-person">Presencial</option>
        <option value="online">En línea</option>
      </select>
      <button
        onClick={resetFilters}
        className="bg-dodgerBlue text-white font-bold rounded p-2"
      >
        Restablecer filtros
      </button>
    </>
  );
};

export default EventFilters;
import React from 'react';
import { useEffect, useState } from 'react';
import useEvents from '../hooks/useEvents';
import { categories } from '/categoriesData'
import PlaceAutocomplete from "./PlaceAutocomplete";

const EventFilters = ({ setAllEvents }) => {

  const { allEvents } = useEvents();
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');

  const handleChangeType = (e) => {
    setSelectedType(e.target.value);
  }

  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value);
  }; 

  const resetFilters = () => {
    setAllEvents(allEvents);
    setSelectedType('all');
    setSelectedCategory('all');
    setSelectedCity('all')
  }

  useEffect(() => {
    let filteredEvents = allEvents;
  
    if (selectedType !== 'all') {
      filteredEvents = filteredEvents.filter(event => event.type === selectedType);
    }
  
    if (selectedCategory !== 'all') {
      filteredEvents = filteredEvents.filter(event => event.category === parseInt(selectedCategory));
    }

    if (selectedCity !== 'all') {
      filteredEvents = filteredEvents.filter(event => event.city === selectedCity.value.description);
    }
  
    setAllEvents(filteredEvents);
  }, [selectedType, selectedCategory, selectedCity, setAllEvents]);

  return (
    <>
      <select
        className="border border-slate-400 rounded h-8"
        onChange={handleChangeType}
        value={selectedType}
      >
        <option value="all">Cualquier Tipo</option>
        <option value="inPerson">Presencial</option>
        <option value="online">En línea</option>
      </select>
      <select className="border border-slate-400 rounded h-8" value={selectedCategory}
              onChange={handleChangeCategory}>
        <option value="all">Cualquier categoría</option>
        {categories.map((category, index) => (
                <option key={index} value={category.value}>
                  {category.name}
                </option>
              ))}
      </select>
      <PlaceAutocomplete 
              city={selectedCity}
              setCity={setSelectedCity}
            />
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
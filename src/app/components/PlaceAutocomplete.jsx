'use client'
import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


const PlaceAutocomplete = ({ city, setCity }) => {

  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        selectProps={{
          city,
          onChange: setCity,
          value: city,
        }}
      />
  </div>
  );
};

export default PlaceAutocomplete;
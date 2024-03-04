import React from 'react';
import Image from 'next/image';


const CalendarDate = ({ eventData }) => {

  

  return (
    <>
      <Image
        src={"/calendarIcon.svg"}
        alt={`calentarIcon del evento`}
        width={30}
        height={30}
      />
      <h1 className="text-radicalRed text-2xl font-bold">
        {eventData.date}
      </h1>
    </>
  );
};

export default CalendarDate; 
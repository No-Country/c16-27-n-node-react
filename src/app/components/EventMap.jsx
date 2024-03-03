import React from "react";

const EventMap = ({ eventData }) => {
  return (
    <>
      <article className="p-3">
        <h2 className="text-dodgerBlue font-bold text-xl mt-8 md:mt-0">
          {eventData.type === "online" ? (
            <p className="text-[#0F0F0F]">
              Enlace:{" "}
              <a
                href={eventData.address}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dodgerBlue hover:underline"
              >
                {eventData.address}
              </a>
            </p>
          ) : (
            <p className="text-dodgerBlue">{eventData.address}</p>
          )}
        </h2>
      </article>
      <article>
        {eventData.type === "inPerson" ? (
          <iframe
            className="h-[350px] rounded-lg p-3 w-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${eventData.address}`}
          ></iframe>
        ) : (
          ""
        )}
      </article>
    </>
  );
};

export default EventMap;

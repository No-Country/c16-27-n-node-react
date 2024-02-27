import React from "react";

const EventMap = ({ eventData }) => {
  return (
    <>
      <article className="p-3">
        <h2 className="text-[#23B0FF] font-bold text-xl">
          {eventData.type === "online" ? (
            <p className="text-[#0F0F0F]">
              Enlace:{" "}
              <a
                href={eventData.address}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#23B0FF] hover:underline"
              >
                {eventData.address}
              </a>
            </p>
          ) : (
            <p className="text-[#23B0FF]">{eventData.address}</p>
          )}
        </h2>
      </article>
      <article>
        {eventData.type === "in-person" ? (
          <iframe
            className=" h-[350px] rounded-lg p-3"
            width="400"
            height="320"
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

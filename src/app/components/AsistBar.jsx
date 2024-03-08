'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import copy from 'clipboard-copy';

const AsistBar = ({ userEmail, eventData }) => {
  const [isAttending, setIsAttending] = useState(false);

  useEffect(() => {
    if (eventData && eventData.attendees) {
      setIsAttending(eventData.attendees.includes(userEmail));
    }
  }, [eventData, userEmail]);

  const reloadPage = () => {
    window.location.reload();
  };

  const handleCopyLink = () => {
    const currentURL = window.location.href;
    copy(currentURL);
    Swal.fire({
      title: "¡Enlace copiado!",
      position: "bottom",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log('Enlace copiado al portapapeles:', currentURL);
  };

  const handleAttendClick = () => {

    if (isAttending) {
      Swal.fire({
        title: "¿Seguro que quieres salir de este evento?",
        text: "¡Tendrás que volver a inscribirte para asistir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Sí, anular asistencia!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:4000/api/events/${eventData._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              attendees: eventData.attendees.filter((email) => email !== userEmail),
            }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error al anular la asistencia al evento");
              }
              setIsAttending(false);
              setTimeout(reloadPage, 1500);
            })
            .catch((error) => {
              console.error(
                "Error al anular la asistencia al evento:",
                error.message
              );
            });
          Swal.fire({
            title: "¡Eliminada!",
            text: "Tu asistencia ha sido eliminada.",
            icon: "success"
          });
        }
      });
    } else {
      fetch(`http://localhost:4000/api/users/attendEvent/${eventData._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
        }),
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Error al asistir al evento");
        }
        setIsAttending(true);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Asistencia registrada exitosamente",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(reloadPage, 1500);
      });
    }
  };

  return (
    <div className="flex gap-4">
      <div className="flex items-center justify-center gap-3 bg-dodgerBlue p-2 rounded-2xl text-white text-xl md:text-2xl font-bold h-16 w-40 md:w-48">
        <button onClick={handleCopyLink}>Compartir</button>
        <Image
          src={"/shareLogo.svg"}
          alt={`icono de compartir evento`}
          width={30}
          height={40}
        />
      </div>
      <div
        onClick={handleAttendClick}
        className={`flex items-center justify-center gap-3 ${
          isAttending ? "bg-red-500" : "bg-Shamrock"
        } p-2 rounded-2xl text-white text-xl md:text-2xl font-bold h-16 w-40 md:w-48`}
      >
        <button>{isAttending ? "Anular" : "Asistir"}</button>
        <Image
          src={isAttending ? "/userRemove.svg" : "/userAdd.svg"}
          alt={`icono de ${isAttending ? "anular" : "asistir"} evento`}
          width={30}
          height={40}
        />
      </div>
    </div>
  );
};

export default AsistBar;

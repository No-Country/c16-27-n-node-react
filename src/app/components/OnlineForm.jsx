"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { categories } from "/categoriesData";
import { timezones } from "/timezones";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

const OnlineForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [address, setAddress] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [showSelectCategory, setShowSelectCategory] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const { data: session } = useSession();

  const reloadPage = (eventId) => {
    window.location.href = `/event/${eventId}`;
  };

  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value);
    setShowSelectCategory(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      creatorUserEmail: session.user?.email,
      title: title,
      description: description,
      date: `${date} ${hour} ${selectedTimezone.split(" |")[0]}`,
      category: selectedCategory,
      address: address,
      type: "online",
    };

    fetch("http://localhost:4000/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const eventId = data.data._id;
        const imageFormData = new FormData();
        imageFormData.append("file", imagePreview);
        fetch(`http://localhost:4000/api/events/updateImage/${eventId}`, {
          method: "POST",
          body: imageFormData,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to upload image");
            }
            console.log("Image uploaded successfully");
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Evento creado exitosamente",
              showConfirmButton: false,
              html: `<a href="/event/${eventId}" class="text-blue-500">Ir al evento</a>`,
            });
          })
          .catch((error) => {
            console.error("Error uploading image:", error);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col justify-between">
      <section className="flex flex-col md:flex-row w-full text-lg p-3 md:h-[60rem]">
        <div className="flex flex-col w-full md:w-1/2 p-4 md:border-r">
          <div className="h-1/2 flex flex-col gap-2">
            <label htmlFor="">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded-md"
              required
            />
            <label htmlFor="">Categoría</label>
            <select
              name=""
              id=""
              className="border rounded-md"
              value={selectedCategory}
              onChange={handleChangeCategory}
              required
            >
              {showSelectCategory && (
                <option disabled value="">
                  Seleccionar categoría
                </option>
              )}
              {categories.map((category, index) => (
                <option key={index} value={category.value}>
                  {category.name}
                </option>
              ))}
            </select>
            <label htmlFor="">Fecha</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded-md"
              required
            />
            <label htmlFor="">Hora</label>
            <input
              type="time"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              className="border rounded-md"
              required
            />
            <label htmlFor="">Zona Horaria</label>
            <select
              name=""
              id=""
              className="border rounded-md"
              value={selectedTimezone}
              onChange={(e) => setSelectedTimezone(e.target.value)}
              required
            >
              {timezones.map((timezone, index) => (
                <option key={index} value={timezone}>
                  {timezone}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:flex-none mt-4 h-1/2">
            <label htmlFor="">Descripción</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border h-28 md:h-1/2 p-5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col md:border-l md:w-1/2 p-4">
          <div className="md:h-1/2 md:flex md:flex-col">
            <label htmlFor="">Enlace</label>
            <input
              type="text"
              className="border rounded-md"
              placeholder="Deja aqui el enlace de tu evento"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <div className="border bg-[#C4C4C4] flex items-center justify-center rounded-lg h-38">
            <label htmlFor="fileInput" className="cursor-pointer">
              {imagePreview ? (
                <img
                  src={URL.createObjectURL(imagePreview)}
                  alt="Vista previa de la imagen"
                  className="rounded-lg w-28 md:w-64 mt-4"
                />
              ) : (
                <Image
                  src={"/camera-fill.svg"}
                  alt="icono de la cámara"
                  width={300}
                  height={300}
                  className="rounded-lg w-28 md:w-64 mt-4"
                />
              )}
              <input
                type="file"
                id="fileInput"
                className="w-0 h-0 overflow-hidden"
                onChange={handleImageChange}
                required
              />
            </label>
            </div>
          </div>
        </div>
      </section>
      <section className="flex h-[91px] text-xl font-bold">
        <button
          className="bg-Shamrock text-white rounded-3xl w-40 m-5"
          type="submit"
        >
          Confirmar
        </button>
        <button
          className="bg-dodgerBlue text-white rounded-3xl w-40 m-5"
          type="button"
        >
          Cancelar
        </button>
      </section>
    </form>
  );
};

export default OnlineForm;

import React from 'react';
import Image from 'next/image';
import { handleDelete } from '../helpers/deleteEventById';

const DeleteBtn = ({ id }) => {

  return (
    <button
      className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-800 z-50 transition transform hover:scale-110"
      onClick={async () => await handleDelete(id)}
    >
      <Image
        src={"/deleteIcon.svg"}
        alt="card image"
        width={30}
        height={30}
        className="rounded-t-lg bg-"
      />
    </button>
  );
};

export default DeleteBtn;
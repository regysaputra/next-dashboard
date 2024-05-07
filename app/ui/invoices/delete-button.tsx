"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import Modal from "./modal";
import { useState } from "react";

type Props = {
  id: string
};

export default function DeleteButton({ id }: Props) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={handleClick} className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>

      <Modal showModal={showModal} handleClick={handleClick} id={id}/>
    </>
  );
}
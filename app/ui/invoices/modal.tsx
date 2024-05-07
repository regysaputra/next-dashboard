"use client";

import { deleteInvoice } from "@/app/lib/action";
import { RefObject, useEffect, useRef } from "react";

type Props = {
  showModal: boolean,
  handleClick: () => void
  id: string
}

export default function Modal({ showModal, handleClick, id }: Props) {
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const formRef = useRef() as RefObject<HTMLFormElement>;
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  useEffect(() => {
    if (showModal) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [showModal]);

  const closeModal = () => {
    handleClick();
  };

  const handleAction = () => {
    deleteInvoice(id);
    handleClick();
  };

  const dialog: JSX.Element | null =
    showModal === true ? (
      <dialog
        ref={dialogRef}
        className="relative bg-white rounded-lg shadow dark:bg-gray-700 backdrop:bg-black/50"
      >
        <div className="p-4 md:p-5 text-center">
          <svg
            className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this record?
          </h3>
          <form
            action={handleAction}
            ref={formRef}
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
          >
            <button type="submit">Yes, I&apos;m sure</button>
          </form>
          <button
            onClick={closeModal}
            type="button"
            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            No, cancel
          </button>
        </div>
      </dialog>
    ) : null;

  return dialog;
}